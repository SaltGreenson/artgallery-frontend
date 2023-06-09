import { UserActionsType } from "@/store/userReducer/actions";
import { UserActionTypes } from "@/store/userReducer/actionTypes";
import { initialState } from "@/store/userReducer/initialState";

export type UserStateType = typeof initialState;

export const userReducer = (
  state = initialState,
  action: UserActionsType
): UserStateType => {
  switch (action.type) {
    case UserActionTypes.FETCH_APP:
    case UserActionTypes.SET_IS_AUTH:
    case UserActionTypes.SET_AUTH_USER:
    case UserActionTypes.FETCH_APP_ERROR:
    case UserActionTypes.FETCH_APP_SUCCESS:
    case UserActionTypes.SET_MODAL_MESSAGE:
    case UserActionTypes.SET_LIKED_POSTS:
    case UserActionTypes.SET_LIKED_COUNT:
    case UserActionTypes.SET_POSTS_COUNT:
    case UserActionTypes.SET_DISLIKED_POSTS: {
      return {
        ...state,
        ...action.payload,
      };
    }
  }
  return state;
};
