import { baseApi } from "../axios-instance";
import { API_ENDPOINTS } from "../endpoints";
import type { User } from "./userApi";

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  phone?: string;
  role: "player" | "owner";
}

export interface AuthResponse {
  user: User;
  access_token: string;
  refresh_token?: string;
}

export const authApi = {
  // Regular email/password login
  login: async (data: LoginRequest): Promise<AuthResponse> => {
    const response = await baseApi.post(API_ENDPOINTS.AUTH.LOGIN, data);
    return response.data;
  },

  // Register new account
  register: async (data: RegisterRequest): Promise<AuthResponse> => {
    const response = await baseApi.post(API_ENDPOINTS.AUTH.REGISTER, data);
    return response.data;
  },

  // Logout (invalidate token)
  logout: async (): Promise<void> => {
    await baseApi.post(API_ENDPOINTS.AUTH.LOGOUT);
  },

  // Refresh access token
  refreshToken: async (): Promise<{ access_token: string }> => {
    const response = await baseApi.post(API_ENDPOINTS.AUTH.REFRESH);
    return response.data;
  },

  // Get current user info
  me: async (): Promise<User> => {
    const response = await baseApi.get(API_ENDPOINTS.AUTH.ME);
    return response.data;
  },
};
