import axios from "axios";
import { IAuthResponse } from "@/models/AuthResponse";

export const API_URL = process.env.API_URL || "http://localhost:5000/api";

const api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

const handleRefreshToken = async (error: any) => {
  const originalRequest = error.config;

  if (error.response.status == 401 && error.config && !error.config._isRetry) {
    originalRequest._isRetry = true;
    try {
      const response = await axios.put<IAuthResponse>(
        `${API_URL}/users/refresh`,
        {
          withCredentials: true,
        }
      );
      localStorage.setItem("token", response.data.accessToken);
      return api.request(originalRequest);
    } catch (e) {
      console.log(e);
    }
  }
  throw error;
};

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use((config) => config, handleRefreshToken);

export default api;
