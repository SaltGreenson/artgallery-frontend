import api from "@/http/api";
import { AxiosResponse } from "axios";
import { IGallery } from "@/models/IGallery";
import { SortType } from "@/store/galleryReducer/initialState";
import { createQueryStringHelper } from "@/utils/helpers/createQueryString.helper";
import { ILikeDislikeResponse } from "@/models/ILikeDislikeResponse";
import { ICRUDGalleryResponse } from "@/models/ICRUDGalleryResponse";

export const galleryService = {
  create: (gallery: FormData): Promise<AxiosResponse<ICRUDGalleryResponse>> =>
    api.post<ICRUDGalleryResponse>("/gallery/create", gallery, {
      headers: {
        "content-type": "multipart/form-data",
      },
    }),
  remove: (galleryId: string): Promise<AxiosResponse<ICRUDGalleryResponse>> =>
    api.delete(`/gallery/remove?galleryId=${galleryId}`),
  getAll: (
    skip?: number,
    limit?: number,
    userId?: string,
    searchString?: string,
    sortType?: SortType
  ): Promise<AxiosResponse<IGallery[]>> =>
    api.get<IGallery[]>(
      `/gallery?${createQueryStringHelper({
        skip,
        limit,
        userId,
        searchString,
        sortType,
      })}`
    ),
  like: (galleryId: string): Promise<AxiosResponse<ILikeDislikeResponse>> =>
    api.post<ILikeDislikeResponse>(`/gallery/like`, {
      galleryId,
    }),
  dislike: (galleryId: string): Promise<AxiosResponse<ILikeDislikeResponse>> =>
    api.post<ILikeDislikeResponse>(`/gallery/dislike`, {
      galleryId,
    }),
};
