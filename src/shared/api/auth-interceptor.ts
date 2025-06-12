import { AxiosInstance } from "axios";
import { getAccessToken, setAccessToken, clearToken } from "@/shared/lib/token";
import { refreshAccessToken } from "./refresh-token";

export const attachAuthInterceptor = (instance: AxiosInstance) => {
  instance.interceptors.request.use((config) => {
    const token = getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  instance.interceptors.response.use(
    (res) => res,
    async (error) => {
      const originalRequest = error.config;
      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        try {
          const newToken = await refreshAccessToken();
          setAccessToken(newToken);
          originalRequest.headers.Authorization = `Bearer ${newToken}`;
          return instance(originalRequest);
        } catch {
          clearToken();
          if (typeof window !== "undefined") {
            window.location.href = "/login";
          }
        }
      }
      return Promise.reject(error);
    }
  );
};
