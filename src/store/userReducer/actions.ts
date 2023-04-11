import { UserActionTypes } from "@/store/userReducer/actionTypes";
import { IUser } from "@/models/IUser";

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
  payload: { authUser: IUser | null };
}

export type AppActionsType =
  | IFetching
  | ISetIsAuth
  | ISetAuthUser
  | IFetchingSuccess
  | IFetchingError
  | ISetMessage;

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
  setAuthUser: (authUser: IUser | null): ISetAuthUser =>
    ({
      type: UserActionTypes.SET_AUTH_USER,
      payload: { authUser },
    } as const),
};
