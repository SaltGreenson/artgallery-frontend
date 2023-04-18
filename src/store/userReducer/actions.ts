import { UserActionTypes } from "@/store/userReducer/actionTypes";
import { IAuthUser } from "@/models/IUser";
import { ILikedPosts } from "@/models/ILikedPosts";
import { IDislikedPosts } from "@/models/IDislikedPosts";

interface IFetching {
  type: UserActionTypes.FETCH_APP;
  payload: { isFetching: boolean };
}

interface IFetchingSuccess {
  type: UserActionTypes.FETCH_APP_SUCCESS;
  payload: { fetchingSuccess: boolean };
}

interface IFetchingError {
  type: UserActionTypes.FETCH_APP_ERROR;
  payload: { fetchingError: boolean };
}

interface ISetMessage {
  type: UserActionTypes.SET_MODAL_MESSAGE;
  payload: { message: string };
}

interface ISetIsAuth {
  type: UserActionTypes.SET_IS_AUTH;
  payload: { isAuth: boolean };
}

interface ISetAuthUser {
  type: UserActionTypes.SET_AUTH_USER;
  payload: { authUser: IAuthUser | null };
}

interface ISetLikedPosts {
  type: UserActionTypes.SET_LIKED_POSTS;
  payload: { likedPosts: ILikedPosts[] };
}

interface ISetDislikedPosts {
  type: UserActionTypes.SET_DISLIKED_POSTS;
  payload: { dislikedPosts: IDislikedPosts[] };
}

export type UserActionsType =
  | IFetching
  | ISetIsAuth
  | ISetAuthUser
  | IFetchingSuccess
  | IFetchingError
  | ISetMessage
  | ISetLikedPosts
  | ISetDislikedPosts;

export const userActions = {
  setFetching: (isFetching: boolean): IFetching =>
    ({
      type: UserActionTypes.FETCH_APP,
      payload: { isFetching },
    } as const),
  setFetchingSuccess: (fetchingSuccess: boolean): IFetchingSuccess =>
    ({
      type: UserActionTypes.FETCH_APP_SUCCESS,
      payload: { fetchingSuccess },
    } as const),
  setFetchingError: (fetchingError: boolean): IFetchingError =>
    ({
      type: UserActionTypes.FETCH_APP_ERROR,
      payload: { fetchingError },
    } as const),
  setModalMessage: (message: string): ISetMessage =>
    ({
      type: UserActionTypes.SET_MODAL_MESSAGE,
      payload: { message },
    } as const),
  setIsAuth: (isAuth: boolean): ISetIsAuth =>
    ({
      type: UserActionTypes.SET_IS_AUTH,
      payload: { isAuth },
    } as const),
  setAuthUser: (authUser: IAuthUser | null): ISetAuthUser =>
    ({
      type: UserActionTypes.SET_AUTH_USER,
      payload: { authUser },
    } as const),
  setLikedPosts: (likedPosts: ILikedPosts[]): ISetLikedPosts =>
    ({
      type: UserActionTypes.SET_LIKED_POSTS,
      payload: { likedPosts },
    } as const),
  setDislikedPosts: (dislikedPosts: IDislikedPosts[]): ISetDislikedPosts =>
    ({
      type: UserActionTypes.SET_DISLIKED_POSTS,
      payload: { dislikedPosts },
    } as const),
};
