import api from "@/http/api";
import { AxiosResponse } from "axios";
import { IAuthResponse } from "@/models/IAuthResponse";
import { ILikeDislikeResponse } from "@/models/ILikeDislikeResponse";

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
  likedPosts: (skip?: number): Promise<AxiosResponse<ILikeDislikeResponse>> =>
    api.get<ILikeDislikeResponse>(`/users/liked-posts?skip=${skip}`),
};
