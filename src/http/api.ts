import axios from "axios";
import handleRefreshToken from "@/utils/handlers/refreshToken.handler";

export const API_URL = process.env.API_URL || "http://localhost:5000/api";

const api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (config) => config,
  handleRefreshToken(api, API_URL)
);

export default api;
