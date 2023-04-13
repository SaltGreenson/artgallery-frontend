import { GalleryActionTypes } from "./actionTypes";
import { IGallery } from "@/models/IGallery";

interface ISetGalleries {
  type: GalleryActionTypes.SET_GALLERIES;
  payload: { galleries: IGallery[] | null };
}

export type GalleryActionsType = ISetGalleries;

export const galleryActions = {
  setGalleries: (galleries: IGallery[] | null): ISetGalleries =>
    ({
      type: GalleryActionTypes.SET_GALLERIES,
      payload: { galleries },
    } as const),
};
