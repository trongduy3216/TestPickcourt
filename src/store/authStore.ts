import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { getAccessToken, setAccessToken, clearToken } from "@/shared/lib/token";

export type UserRole = "guest" | "player" | "owner";

interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  phone?: string;
  role: UserRole;
}

interface AuthState {
  // State
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;

  // Actions
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  loginWithGoogle: () => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  setUser: (user: User) => void;
  updateProfile: (updates: Partial<User>) => void;
  checkAuth: () => Promise<void>;
  clearAuth: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      // Initial state
      user: null,
      isAuthenticated: false,
      loading: true,

      // Actions
      login: async (email: string, password: string) => {
        try {
          // TODO: Replace with actual API call
          // const response = await fetch('/api/auth/login', {
          //   method: 'POST',
          //   headers: { 'Content-Type': 'application/json' },
          //   body: JSON.stringify({ email, password }),
          // });

          // Mock API response
          await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay

          // Multiple demo accounts for testing
          let mockUser: User | null = null;

          if (email === "player@pickcourt.com" && password === "demo123") {
            mockUser = {
              id: "1",
              name: "Nguyễn Văn Player",
              email: email,
              avatar: "",
              phone: "0123456789",
              role: "player",
            };
          } else if (email === "owner@pickcourt.com" && password === "demo123") {
            mockUser = {
              id: "2",
              name: "Trần Thị Owner",
              email: email,
              avatar: "",
              phone: "0987654321",
              role: "owner",
            };
          }

          if (mockUser) {
            const mockToken = "mock-jwt-token-" + Date.now();

            // Save token
            setAccessToken(mockToken);

            // Set cookies for middleware protection
            if (typeof document !== "undefined") {
              document.cookie = `auth-token=${mockToken}; path=/; max-age=86400; secure; samesite=strict`;
              document.cookie = `user-role=${mockUser.role}; path=/; max-age=86400; secure; samesite=strict`;
            }

            // Update state
            set({
              user: mockUser,
              isAuthenticated: true,
              loading: false,
            });

            return { success: true };
          } else {
            return {
              success: false,
              error: "Email hoặc mật khẩu không đúng",
            };
          }
        } catch (error) {
          console.error("Login error:", error);
          return {
            success: false,
            error: "Đăng nhập thất bại. Vui lòng thử lại.",
          };
        }
      },

      loginWithGoogle: async () => {
        try {
          // Redirect to Google OAuth using centralized endpoint
          const googleAuthUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}${await import("@/shared/api/endpoints").then((m) => m.API_ENDPOINTS.AUTH.GOOGLE)}`;
          if (typeof window !== "undefined") {
            window.location.href = googleAuthUrl;
          }
          return { success: true };
        } catch (error) {
          console.error("Google login error:", error);
          return { success: false, error: "Lỗi đăng nhập Google" };
        }
      },

      logout: () => {
        clearToken();

        // Clear cookies
        if (typeof document !== "undefined") {
          document.cookie = "auth-token=; path=/; max-age=0";
          document.cookie = "user-role=; path=/; max-age=0";
        }

        set({
          user: null,
          isAuthenticated: false,
          loading: false,
        });
      },

      setUser: (user: User) => {
        set({
          user,
          isAuthenticated: true,
          loading: false,
        });
      },

      updateProfile: (updates: Partial<User>) => {
        const currentUser = get().user;
        if (currentUser) {
          set({
            user: { ...currentUser, ...updates },
          });
        }
      },

      checkAuth: async () => {
        try {
          const token = getAccessToken();

          if (!token) {
            set({
              user: null,
              isAuthenticated: false,
              loading: false,
            });
            return;
          }

          // TODO: Validate token with server
          // const response = await fetch('/api/auth/me', {
          //   headers: { Authorization: `Bearer ${token}` },
          // });

          // Mock validation
          const mockUser: User = {
            id: "1",
            name: "Nguyễn Văn Demo",
            email: "demo@pickcourt.com",
            avatar: "",
            phone: "0123456789",
            role: "player",
          };

          set({
            user: mockUser,
            isAuthenticated: true,
            loading: false,
          });
        } catch (error) {
          console.error("Auth check failed:", error);
          clearToken();
          set({
            user: null,
            isAuthenticated: false,
            loading: false,
          });
        }
      },

      clearAuth: () => {
        clearToken();
        set({
          user: null,
          isAuthenticated: false,
          loading: false,
        });
      },
    }),
    {
      name: "auth-storage", // unique name
      storage: createJSONStorage(() => {
        // Use localStorage on client, fallback for SSR
        if (typeof window !== "undefined") {
          return localStorage;
        }
        return {
          getItem: () => null,
          setItem: () => {},
          removeItem: () => {},
        };
      }),
      partialize: (state) => ({
        // Only persist user data, not loading state
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);

// Auth initialization hook for app startup
export const initializeAuth = async () => {
  const { checkAuth } = useAuthStore.getState();
  await checkAuth();
};
