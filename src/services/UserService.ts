import api from "@/http/api";
import { AxiosResponse } from "axios";
import { IAuthResponse } from "@/models/AuthResponse";
import { IGallery } from "@/models/IGallery";

export const userService = {
  login: (
    email: string,
    password: string
  ): Promise<AxiosResponse<IAuthResponse>> =>
    api.post<IAuthResponse>("/users/log-in", {
      email,
      password,
    }),
  logout: (): Promise<void> => api.delete("/users/logout"),
  signup: (
    name: string,
    email: string,
    password: string
  ): Promise<AxiosResponse<IAuthResponse>> =>
    api.post<IAuthResponse>("/users/sign-up", {
      name,
      email,
      password,
    }),
  refresh: (): Promise<AxiosResponse<IAuthResponse>> =>
    api.put<IAuthResponse>(`/users/refresh`, {
      withCredentials: true,
    }),
  likedPosts: (): Promise<AxiosResponse<IGallery[]>> =>
    api.get("/users/liked-posts"),
};
