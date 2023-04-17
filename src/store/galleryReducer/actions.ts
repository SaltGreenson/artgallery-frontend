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
  payload: { index: number };
}

interface ISetUnliked {
  type: GalleryActionTypes.SET_UNLIKED;
  payload: { index: number };
}

interface ISetDisliked {
  type: GalleryActionTypes.SET_DISLIKED;
  payload: { index: number };
}

interface ISetUndisliked {
  type: GalleryActionTypes.SET_UNDISLIKED;
  payload: { index: number };
}

export type GalleryActionsType =
  | ISetGalleries
  | ISetGalleryFetching
  | ISetLikeFetching
  | ISetDislikeFetching
  | ISetLiked
  | ISetUnliked
  | ISetDisliked
  | ISetUndisliked;

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
  setLiked: (index: number): ISetLiked =>
    ({
      type: GalleryActionTypes.SET_LIKED,
      payload: { index },
    } as const),
  setDisliked: (index: number): ISetDisliked =>
    ({
      type: GalleryActionTypes.SET_DISLIKED,
      payload: { index },
    } as const),
  setUnliked: (index: number): ISetUnliked =>
    ({
      type: GalleryActionTypes.SET_UNLIKED,
      payload: { index },
    } as const),
  setUndisliked: (index: number): ISetUndisliked =>
    ({
      type: GalleryActionTypes.SET_UNDISLIKED,
      payload: { index },
    } as const),
};
