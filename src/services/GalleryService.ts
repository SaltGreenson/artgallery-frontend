import api from "@/http/api";
import { AxiosResponse } from "axios";
import { IGallery } from "@/models/IGallery";
import { SortType } from "@/store/galleryReducer/initialState";
import { createQueryStringHelper } from "@/utils/helpers/createQueryString.helper";

export const galleryService = {
  create: (gallery: FormData): Promise<AxiosResponse<IGallery>> =>
    api.post<IGallery>("/gallery/create", gallery, {
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
  like: (galleryId: string): Promise<AxiosResponse<IGallery>> =>
    api.post<IGallery>("/gallery/like", {
      galleryId,
    }),
  dislike: (galleryId: string): Promise<AxiosResponse<IGallery>> =>
    api.post<IGallery>("/gallery/dislike", {
      galleryId,
    }),
  unlike: (galleryId: string): Promise<AxiosResponse<IGallery>> =>
    api.post<IGallery>("/gallery/unlike", {
      galleryId,
    }),
  undislike: (galleryId: string): Promise<AxiosResponse<IGallery>> =>
    api.post<IGallery>("/gallery/undislike", {
      galleryId,
    }),
};
