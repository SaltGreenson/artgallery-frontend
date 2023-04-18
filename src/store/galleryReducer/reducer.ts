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
    case GalleryActionTypes.HYDRATE:
    case GalleryActionTypes.SET_GALLERY_FETCHING:
    case GalleryActionTypes.SET_LIKE_FETCHING: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case GalleryActionTypes.SET_DISLIKED: {
      const galleries = [...state.galleries];
      const galleryToUpdate = galleries[action.payload.index];

      if (action.payload.isDisliked) {
        galleryToUpdate.dislikes -= 1;
      } else {
        galleryToUpdate.dislikes += 1;
      }

      return {
        ...state,
        galleries,
      };
    }
    case GalleryActionTypes.SET_LIKED: {
      const galleries = [...state.galleries];
      const galleryToUpdate = galleries[action.payload.index];

      if (action.payload.isLiked) {
        galleryToUpdate.likes -= 1;
      } else {
        galleryToUpdate.likes += 1;
      }

      return {
        ...state,
        galleries,
      };
    }
    default:
      return state;
  }
};
