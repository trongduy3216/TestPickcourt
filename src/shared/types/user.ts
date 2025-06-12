export type UserRole = "guest" | "player" | "owner" | "admin";

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  avatar?: string;
  role: UserRole;
  isVerified: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface UserProfile extends Omit<User, "role" | "isVerified"> {
  bio?: string;
  favoriteFields: string[];
  totalBookings: number;
  memberSince: string;
}

export interface UserStats {
  totalBookings: number;
  totalSpent: number;
  favoriteFieldIds: string[];
  preferredSportTypes: string[];
  averageRating: number;
  reviewCount: number;
}

// Authentication related type
export interface AuthUser {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
  isVerified: boolean;
}

export interface UserSession {
  user: AuthUser;
  accessToken: string;
  refreshToken?: string;
  expiresAt: string;
}

// User form types
export interface CreateUserRequest {
  name: string;
  email: string;
  password: string;
  phone?: string;
  role: "player" | "owner";
}

export interface ChangePasswordRequest {
  currentPassword: string;
  newPassword: string;
}

export interface ResetPasswordRequest {
  token: string;
  newPassword: string;
}
