import api from "@/http/api";
import { AxiosResponse } from "axios";
import { IGallery } from "@/models/IGallery";
import { createQueryStringHelper } from "@/utils/helpers/createQueryString.helper";
import { ILikeDislikeResponse } from "@/models/ILikeDislikeResponse";
import { ICRUDGalleryResponse } from "@/models/ICRUDGalleryResponse";

export const galleryService = {
  create: (gallery: FormData): Promise<AxiosResponse<ICRUDGalleryResponse>> =>
    api.post<ICRUDGalleryResponse>("/galleries/create", gallery, {
      headers: {
        "content-type": "multipart/form-data",
      },
    }),
  remove: (galleryId: string): Promise<AxiosResponse<ICRUDGalleryResponse>> =>
    api.delete(`/galleries/remove?galleryId=${galleryId}`),
  edit: (galleryId: string, title: string): Promise<AxiosResponse<IGallery>> =>
    api.put(`/galleries/edit`, { galleryId, title }),
  getAll: (
    skip?: number,
    limit?: number,
    userId?: string,
    searchString?: string,
    isFirstLiked?: string
  ): Promise<AxiosResponse<IGallery[]>> =>
    api.get<IGallery[]>(
      `/galleries?${createQueryStringHelper({
        skip,
        limit,
        userId,
        searchString,
        isFirstLiked,
      })}`
    ),
  like: (galleryId: string): Promise<AxiosResponse<ILikeDislikeResponse>> =>
    api.put<ILikeDislikeResponse>(`/galleries/like`, {
      galleryId,
    }),
  dislike: (galleryId: string): Promise<AxiosResponse<ILikeDislikeResponse>> =>
    api.put<ILikeDislikeResponse>(`/galleries/dislike`, {
      galleryId,
    }),
  own: (
    skip?: number,
    limit?: number,
    userId?: string,
    searchString?: string,
    isFirstLiked?: string
  ): Promise<AxiosResponse<IGallery[]>> =>
    api.get<IGallery[]>(
      `/galleries/own?${createQueryStringHelper({
        skip,
        limit,
        userId,
        searchString,
        isFirstLiked,
      })}`
    ),
};
