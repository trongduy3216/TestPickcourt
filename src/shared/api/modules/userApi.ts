import { baseApi } from "../axios-instance";
import { API_ENDPOINTS } from "../endpoints";

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  phone?: string;
  role: "guest" | "player" | "owner";
}

export interface UpdateUserRequest {
  name?: string;
  phone?: string;
  avatar?: string;
}

export interface ChangePasswordRequest {
  currentPassword: string;
  newPassword: string;
}

export const userApi = {
  // Get current user profile
  getProfile: async (): Promise<User> => {
    const response = await baseApi.get(API_ENDPOINTS.USER.PROFILE);
    return response.data;
  },

  // Update user profile
  updateProfile: async (data: UpdateUserRequest): Promise<User> => {
    const response = await baseApi.put(API_ENDPOINTS.USER.PROFILE, data);
    return response.data;
  },

  // Change password
  changePassword: async (data: ChangePasswordRequest): Promise<void> => {
    await baseApi.post(API_ENDPOINTS.USER.CHANGE_PASSWORD, data);
  },
  // Get user by ID (for owners to view player profiles)
  getUserById: async (userId: string): Promise<User> => {
    const response = await baseApi.get(API_ENDPOINTS.USER.BY_ID(userId));
    return response.data;
  },
}; 