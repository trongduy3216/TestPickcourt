import { useAuthStore } from "@/store/authStore";
import type { User } from "@/shared/api/modules/userApi";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

export interface UseAuthReturn {
  // State
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;

  isPlayer: boolean;
  isOwner: boolean;
  isGuest: boolean;

  // Actions
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  loginWithGoogle: () => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  register: (
    email: string,
    password: string,
    name: string,
    role: "player" | "owner"
  ) => Promise<{ success: boolean; error?: string }>;
  updateProfile: (updates: Partial<User>) => void;
  checkAuth: () => Promise<void>;

  // Utilities
  requireAuth: (redirectTo?: string) => void;
  requireRole: (role: "player" | "owner", redirectTo?: string) => boolean;
  redirectIfAuthenticated: (redirectTo?: string) => void;
}

export const useAuth = (): UseAuthReturn => {
  const store = useAuthStore();
  const router = useRouter();

  // Computed values
  const isPlayer = store.user?.role === "player";
  const isOwner = store.user?.role === "owner";
  const isGuest = !store.isAuthenticated || store.user?.role === "guest";

  // Register method (not in store yet)
  const register = useCallback(
    async (
      email: string,
      password: string,
      name: string,
      role: "player" | "owner"
    ): Promise<{ success: boolean; error?: string }> => {
      try {
        // TODO: Implement actual registration API call
        // For now, simulate registration
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Mock success - in real app, this would call backend
        const mockUser = {
          id: Date.now().toString(),
          name,
          email,
          role,
          avatar: "",
          phone: "",
        };

        store.setUser(mockUser);
        return { success: true };
      } catch (error) {
        console.error("Registration error:", error);
        return { success: false, error: "Đăng ký thất bại" };
      }
    },
    [store]
  );

  // Require authentication utility
  const requireAuth = useCallback(
    (redirectTo?: string) => {
      if (!store.isAuthenticated) {
        const redirect = redirectTo || window.location.pathname;
        router.push(`/login?redirect=${encodeURIComponent(redirect)}`);
      }
    },
    [store.isAuthenticated, router]
  );

  // Require specific role utility
  const requireRole = useCallback(
    (role: "player" | "owner", redirectTo?: string): boolean => {
      if (!store.isAuthenticated) {
        requireAuth(redirectTo);
        return false;
      }

      if (store.user?.role !== role) {
        const defaultRedirect = role === "owner" ? "/owner/dashboard" : "/dashboard";
        router.push(redirectTo || defaultRedirect);
        return false;
      }

      return true;
    },
    [store.isAuthenticated, store.user?.role, requireAuth, router]
  );

  // Redirect if already authenticated
  const redirectIfAuthenticated = useCallback(
    (redirectTo?: string) => {
      if (store.isAuthenticated && store.user) {
        const defaultRedirect = store.user.role === "owner" ? "/owner/dashboard" : "/dashboard";
        router.push(redirectTo || defaultRedirect);
      }
    },
    [store.isAuthenticated, store.user, router]
  );

  return {
    // State
    user: store.user,
    isAuthenticated: store.isAuthenticated,
    loading: store.loading,

    // Computed
    isPlayer,
    isOwner,
    isGuest,

    // Actions
    login: store.login,
    loginWithGoogle: store.loginWithGoogle,
    logout: store.logout,
    register,
    updateProfile: store.updateProfile,
    checkAuth: store.checkAuth,

    // Utilities
    requireAuth,
    requireRole,
    redirectIfAuthenticated,
  };
};
