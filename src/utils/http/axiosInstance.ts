import axios from "axios";
import handleRefreshToken from "@/utils/handlers/refreshToken.handler";
import { getFromStorage } from "@/utils/helpers/localStorage.helper";
import { API_URL } from "@/http/api";

const createAxiosInstance = (accessToken?: string | null) => {
  const instance = axios.create({
    withCredentials: true,
    baseURL: API_URL,
  });

  instance.interceptors.request.use((config) => {
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    } else {
      const token = getFromStorage("token");
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
