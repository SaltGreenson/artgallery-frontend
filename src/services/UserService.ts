import api from "@/http/api";
import { AxiosResponse } from "axios";
import { IAuthResponse } from "@/models/IAuthResponse";
import { ILikeDislikeResponse } from "@/models/ILikeDislikeResponse";

export const userService = {
  login: (
    email: string,
    password: string
  ): Promise<AxiosResponse<IAuthResponse>> =>
    api.post<IAuthResponse>("/auth/log-in", {
      email,
      password,
    }),
  logout: (): Promise<void> => api.delete("/auth/logout"),
  signup: (
    name: string,
    email: string,
    password: string
  ): Promise<AxiosResponse<IAuthResponse>> =>
    api.post<IAuthResponse>("/auth/sign-up", {
      name,
      email,
      password,
    }),
  refresh: (): Promise<AxiosResponse<IAuthResponse>> =>
    api.put<IAuthResponse>(`/auth/refresh`, {
      withCredentials: true,
    }),
  likedPosts: (skip?: number): Promise<AxiosResponse<ILikeDislikeResponse>> =>
    api.get<ILikeDislikeResponse>(`/users/liked-posts?skip=${skip}`),
};
