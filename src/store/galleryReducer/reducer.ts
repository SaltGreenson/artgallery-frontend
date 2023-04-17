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
    case GalleryActionTypes.SET_DISLIKED: {
      const galleries = [...state.galleries];
      galleries[action.payload.index] = {
        ...galleries[action.payload.index],
        dislikes: galleries[action.payload.index].dislikes + 1,
      };
      return {
        ...state,
        galleries,
      };
    }
    case GalleryActionTypes.SET_LIKED: {
      const galleries = [...state.galleries];
      galleries[action.payload.index] = {
        ...galleries[action.payload.index],
        likes: galleries[action.payload.index].likes + 1,
      };
      return {
        ...state,
        galleries,
      };
    }
    case GalleryActionTypes.SET_UNLIKED: {
      const galleries = [...state.galleries];
      galleries[action.payload.index] = {
        ...galleries[action.payload.index],
        likes: galleries[action.payload.index].likes - 1,
      };
      return {
        ...state,
        galleries,
      };
    }
    case GalleryActionTypes.SET_UNDISLIKED: {
      const galleries = [...state.galleries];
      galleries[action.payload.index] = {
        ...galleries[action.payload.index],
        dislikes: galleries[action.payload.index].dislikes - 1,
      };
      return {
        ...state,
        galleries,
      };
    }
    default:
      return state;
  }
};
