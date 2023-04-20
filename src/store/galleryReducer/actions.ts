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

interface ISetLiked {
  type: GalleryActionTypes.SET_LIKED;
  payload: { index: number; isLiked: boolean };
}

interface ISetDisliked {
  type: GalleryActionTypes.SET_DISLIKED;
  payload: { index: number; isDisliked: boolean };
}

export type GalleryActionsType =
  | ISetGalleries
  | ISetGalleryFetching
  | ISetLikeFetching
  | ISetDislikeFetching
  | ISetLiked
  | ISetDisliked;

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
  setLiked: (index: number, isLiked: boolean): ISetLiked =>
    ({
      type: GalleryActionTypes.SET_LIKED,
      payload: { index, isLiked },
    } as const),
  setDisliked: (index: number, isDisliked: boolean): ISetDisliked =>
    ({
      type: GalleryActionTypes.SET_DISLIKED,
      payload: { index, isDisliked },
    } as const),
};
