import { AppStateType } from "@/store/store";
import { IUser } from "@/models/IUser";

export const getIsAuth = (state: AppStateType): boolean => state.user.isAuth;
export const getAuthUser = (state: AppStateType): IUser | null =>
  state.user.authUser;

export const getIsFetchingApp = (state: AppStateType): boolean =>
  state.user.isFetching;

export const getIsFetchingSuccessApp = (state: AppStateType): boolean =>
  state.user.fetchingSuccess;
export const getIsFetchingErrorApp = (state: AppStateType): boolean =>
  state.user.fetchingError;
export const getMessage = (state: AppStateType): string => state.user.message;
