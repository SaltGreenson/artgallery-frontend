import api from "@/http/api";
import { AxiosResponse } from "axios";
import { IGallery } from "@/models/IGallery";
import { SortType } from "@/store/galleryReducer/initialState";
import { createQueryStringHelper } from "@/utils/helpers/createQueryString.helper";
import { ILikeDislikeResponse } from "@/models/ILikeDislikeResponse";
import { ICreateGalleryResponse } from "@/models/ICreateGalleryResponse";

export const galleryService = {
  create: (gallery: FormData): Promise<AxiosResponse<ICreateGalleryResponse>> =>
    api.post<ICreateGalleryResponse>("/gallery/create", gallery, {
      headers: {
        "content-type": "multipart/form-data",
      },
    }),
  remove: (galleryId: string): Promise<AxiosResponse<IGallery>> =>
    api.delete(`/gallery/remove?galleryId=${galleryId}`),
  getAll: (
    skip: number,
    limit: number,
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
