// src/shared/lib/token.ts

export const getAccessToken = (): string | null => {
  return typeof window !== "undefined" ? localStorage.getItem("access_token") : null;
};

export const setAccessToken = (token: string): void => {
  if (typeof window !== "undefined") {
    localStorage.setItem("access_token", token);
  }
};

export const clearToken = (): void => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("access_token");
  }
};
