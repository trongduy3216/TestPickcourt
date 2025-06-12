const BASE_PREFIX = "/api";

export const API_ENDPOINTS = {
  // AUTH
  AUTH: {
    LOGIN: `${BASE_PREFIX}/auth/login`,
    REGISTER: `${BASE_PREFIX}/auth/register`,
    LOGOUT: `${BASE_PREFIX}/auth/logout`,
    REFRESH: `${BASE_PREFIX}/auth/refresh`,
    ME: `${BASE_PREFIX}/auth/me`,

    // Password Management
    FORGOT_PASSWORD: `${BASE_PREFIX}/auth/forgot-password`,
    RESET_PASSWORD: `${BASE_PREFIX}/auth/reset-password`,

    // OAuth
    GOOGLE: `${BASE_PREFIX}/auth/google`,
  },

  // USER
  USER: {
    PROFILE: `${BASE_PREFIX}/user/profile`,
    CHANGE_PASSWORD: `${BASE_PREFIX}/user/change-password`,
    ACCOUNT: `${BASE_PREFIX}/user/account`,

    // Require ID parameter
    BY_ID: (userId: string) => `${BASE_PREFIX}/user/${userId}`,
  },
};

export const buildQueryString = (
  params: Record<string, string | number | boolean | string[]>
): string => {
  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      if (Array.isArray(value)) {
        value.forEach((v) => searchParams.append(key, v.toString()));
      } else {
        searchParams.append(key, value.toString());
      }
    }
  });

  const queryString = searchParams.toString();
  return queryString ? `?${queryString}` : "";
};

/**
 * Build full URL with query parameters
 */
export const buildUrl = (
  endpoint: string,
  params?: Record<string, string | number | boolean | string[]>
): string => {
  const baseUrl = endpoint;
  const queryString = params ? buildQueryString(params) : "";
  return `${baseUrl}${queryString}`;
};
