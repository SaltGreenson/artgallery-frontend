import { ThunkAction } from "../store";
import { UserActionsType, userActions } from "@/store/userReducer/actions";
import { userService } from "@/services/UserService";
import { IAuthUser } from "@/models/IUser";
import Messages from "@/messages";
import { Dispatch } from "redux";
import handleAxiosError from "@/utils/handlers/reduxAxiosError.handler";
import {
  removeFromStorage,
  setToStorage,
} from "@/utils/helpers/localStorage.helper";

export const _commonLogicUserActionCreator = async (
  callback: () => Promise<void>,
  dispatch: Dispatch<UserActionsType>
) => {
  try {
    dispatch(userActions.setFetching(true));
    await callback();
    dispatch(userActions.setFetchingSuccess(true));
  } catch (e) {
    handleAxiosError(e, dispatch);
  } finally {
    dispatch(userActions.setFetching(false));
  }
};

export const login =
  (
    email: string,
    password: string,
    callback: () => void
  ): ThunkAction<UserActionsType> =>
  async (dispatch) => {
    await _commonLogicUserActionCreator(async () => {
      const data = (await userService.login(email, password)).data;
      setToStorage("token", data.accessToken);
      dispatch(userActions.setIsAuth(true));
      dispatch(userActions.setAuthUser(data.user));
      callback();
    }, dispatch);
  };

export const signup =
  (
    name: string,
    email: string,
    password: string,
    callback: () => void
  ): ThunkAction<UserActionsType> =>
  async (dispatch) => {
    await _commonLogicUserActionCreator(async () => {
      const data = (await userService.signup(name, email, password)).data;
      setToStorage("token", data.accessToken);
      userActions.setIsAuth(true);
      userActions.setAuthUser(data.user);
      callback();
    }, dispatch);
  };

export const logout = (): ThunkAction<UserActionsType> => async (dispatch) => {
  await _commonLogicUserActionCreator(async () => {
    await userService.logout();
    removeFromStorage("token");
    dispatch(userActions.setIsAuth(false));
    dispatch(userActions.setAuthUser(null as IAuthUser | null));
    dispatch(userActions.setModalMessage(Messages.EXIT_FROM_ACCOUNT));
  }, dispatch);
};

export const checkAuth =
  (): ThunkAction<UserActionsType> => async (dispatch) => {
    await _commonLogicUserActionCreator(async () => {
      const data = (await userService.refresh()).data;
      setToStorage("token", data.accessToken);
      dispatch(userActions.setIsAuth(true));
      dispatch(userActions.setAuthUser(data.user));
    }, dispatch);
  };

export const clearModalMessage =
  (): ThunkAction<UserActionsType> => async (dispatch) => {
    dispatch(userActions.setModalMessage(""));
  };
