import { AppStateType } from "@/store/store";
import { IGallery } from "@/models/IGallery";

export const getIsFetchingGallery = (state: AppStateType): boolean =>
  state.gallery.galleryFetching;

export const getIsFetchingLikes = (state: AppStateType): boolean =>
  state.gallery.likeFetching;

export const getIsFetchingDislikes = (state: AppStateType): boolean =>
  state.gallery.dislikeFetching;

export const getGalleries = (state: AppStateType): IGallery[] =>
  state.gallery.galleries;
