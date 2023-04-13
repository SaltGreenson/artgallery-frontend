import { ThunkAction } from "../store";
import { AppActionsType, userActions } from "@/store/userReducer/actions";
import { userService } from "@/services/UserService";
import { IAuthUser } from "@/models/IUser";
import Messages from "@/messages";
import { Dispatch } from "redux";
import handleAxiosError from "@/utils/handlers/reduxAxiosError.handler";

const _commonActions = async (
  callback: () => void,
  dispatch: Dispatch<AppActionsType>
) => {
  try {
    dispatch(userActions.setFetching(true));
    callback();
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
  ): ThunkAction<AppActionsType> =>
  async (dispatch) => {
    await _commonActions(async () => {
      const data = (await userService.login(email, password)).data;
      localStorage.setItem("token", data.accessToken);
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
  ): ThunkAction<AppActionsType> =>
  async (dispatch) => {
    await _commonActions(async () => {
      const data = (await userService.signup(name, email, password)).data;
      localStorage.setItem("token", data.accessToken);
      userActions.setIsAuth(true);
      userActions.setAuthUser(data.user);
      callback();
    }, dispatch);
  };

export const logout = (): ThunkAction<AppActionsType> => async (dispatch) => {
  await _commonActions(async () => {
    await userService.logout();
    localStorage.removeItem("token");
    dispatch(userActions.setIsAuth(false));
    dispatch(userActions.setAuthUser(null as IAuthUser | null));
    dispatch(userActions.setModalMessage(Messages.EXIT_FROM_ACCOUNT));
  }, dispatch);
};

export const checkAuth =
  (): ThunkAction<AppActionsType> => async (dispatch) => {
    await _commonActions(async () => {
      const data = (await userService.refresh()).data;
      localStorage.setItem("token", data.accessToken);
      dispatch(userActions.setIsAuth(true));
      dispatch(userActions.setAuthUser(data.user));
    }, dispatch);
  };

export const clearModalMessage =
  (): ThunkAction<AppActionsType> => async (dispatch) => {
    dispatch(userActions.setModalMessage(""));
  };
