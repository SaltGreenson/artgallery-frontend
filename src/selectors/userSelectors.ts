import { AppStateType } from "@/store/store";
import { IAuthUser } from "@/models/IUser";
import { IGallery } from "@/models/IGallery";

export const getIsAuth = (state: AppStateType): boolean => state.user.isAuth;
export const getAuthUser = (state: AppStateType): IAuthUser | null =>
  state.user.authUser;

export const getIsFetchingApp = (state: AppStateType): boolean =>
  state.user.isFetching;

export const getIsFetchingSuccessApp = (state: AppStateType): boolean =>
  state.user.fetchingSuccess;
export const getIsFetchingErrorApp = (state: AppStateType): boolean =>
  state.user.fetchingError;
export const getMessage = (state: AppStateType): string => state.user.message;

export const getLikedPosts = (state: AppStateType): IGallery[] | null =>
  state.user.likedPosts;
