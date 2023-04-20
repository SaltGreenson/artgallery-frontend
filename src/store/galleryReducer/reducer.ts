import { initialState } from "./initialState";
import { GalleryActionTypes } from "./actionTypes";
import { GalleryActionsType } from "./actions";

export type GalleryStateType = typeof initialState;

export const galleryReducer = (
  state = initialState,
  action: GalleryActionsType
): GalleryStateType => {
  switch (action.type) {
    case GalleryActionTypes.SET_GALLERIES:
    case GalleryActionTypes.SET_DISLIKE_FETCHING:
    case GalleryActionTypes.SET_GALLERY_FETCHING:
    case GalleryActionTypes.SET_LIKE_FETCHING: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
};
