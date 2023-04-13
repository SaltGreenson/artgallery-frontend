import axios from "axios";
import handleRefreshToken from "@/utils/handlers/refreshToken.handler";

export const API_URL = process.env.API_URL || "http://localhost:5000/api";

const createAxiosInstance = (accessToken?: string | null) => {
  const instance = axios.create({
    withCredentials: true,
    baseURL: API_URL,
  });

  instance.interceptors.request.use((config) => {
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    } else {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  });

  instance.interceptors.response.use(
    (config) => config,
    handleRefreshToken(instance, API_URL)
  );

  return instance;
};

export default createAxiosInstance;
