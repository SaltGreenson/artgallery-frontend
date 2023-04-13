import { initialState } from "./initialState";
import { GalleryActionTypes } from "./actionTypes";
import { GalleryActionsType } from "./actions";

export type GalleryStateType = typeof initialState;

export const galleryReducer = (
  state = initialState,
  action: GalleryActionsType
): GalleryStateType => {
  switch (action.type) {
    case GalleryActionTypes.SET_GALLERIES: {
      return {
        ...state,
        ...action.payload,
      };
    }
  }
  return state;
};
