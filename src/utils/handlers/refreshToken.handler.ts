import axios, { AxiosInstance } from "axios";
import { IAuthResponse } from "@/models/IAuthResponse";
import { setToStorage } from "@/utils/helpers/localStorage.helper";

export const handleRefreshToken =
  (api: AxiosInstance, API_URL: string) => async (error: any) => {
    const originalRequest = error.config;

    if (
      error.response?.status == 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const data = (
          await axios.put<IAuthResponse>(`${API_URL}/users/refresh`, {
            withCredentials: true,
          })
        ).data;
        setToStorage("token", data.accessToken);
        return api.request(originalRequest);
      } catch (e) {
        console.log(e);
      }
    }
    throw error;
  };

export default handleRefreshToken;
