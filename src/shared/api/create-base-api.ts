import axios, { AxiosRequestConfig, AxiosInstance } from "axios";

export const createBaseApi = (config?: AxiosRequestConfig): AxiosInstance => {
  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    headers: {
      "Content-Type": "application/json",
    },
    ...config,
  });
};
