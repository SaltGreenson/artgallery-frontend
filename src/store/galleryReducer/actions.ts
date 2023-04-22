import { GalleryActionTypes } from "./actionTypes";
import { IGallery } from "@/models/IGallery";

interface ISetGalleries {
  type: GalleryActionTypes.SET_GALLERIES;
  payload: { galleries: IGallery[] };
}

interface ISetGalleryFetching {
  type: GalleryActionTypes.SET_GALLERY_FETCHING;
  payload: { galleryFetching: boolean };
}

interface ISetLikeFetching {
  type: GalleryActionTypes.SET_LIKE_FETCHING;
  payload: { likeFetching: boolean };
}

interface ISetDislikeFetching {
  type: GalleryActionTypes.SET_DISLIKE_FETCHING;
  payload: { dislikeFetching: boolean };
}

export type GalleryActionsType =
  | ISetGalleries
  | ISetGalleryFetching
  | ISetLikeFetching
  | ISetDislikeFetching;

export const galleryActions = {
  setGalleries: (galleries: IGallery[]): ISetGalleries =>
    ({
      type: GalleryActionTypes.SET_GALLERIES,
      payload: { galleries },
    } as const),
  setGalleryFetching: (galleryFetching: boolean): ISetGalleryFetching =>
    ({
      type: GalleryActionTypes.SET_GALLERY_FETCHING,
      payload: { galleryFetching },
    } as const),
  setLikeFetching: (likeFetching: boolean): ISetLikeFetching =>
    ({
      type: GalleryActionTypes.SET_LIKE_FETCHING,
      payload: { likeFetching },
    } as const),
  setDislikeFetching: (dislikeFetching: boolean): ISetDislikeFetching =>
    ({
      type: GalleryActionTypes.SET_DISLIKE_FETCHING,
      payload: { dislikeFetching },
    } as const),
};
