import { ThunkAction } from "../store";
import { AppActionsType, userActions } from "@/store/userReducer/actions";
import { userService } from "@/services/UserService";
import { IUser } from "@/models/IUser";
import Messages from "@/messages";
import handleAxiosError from "@/utils/handlers/handleAxiosError";

export const login =
  (
    email: string,
    password: string,
    callback: () => void
  ): ThunkAction<AppActionsType> =>
  async (dispatch) => {
    try {
      dispatch(userActions.setFetching(true));
      const data = (await userService.login(email, password)).data;
      localStorage.setItem("token", data.accessToken);
      dispatch(userActions.setIsAuth(true));
      dispatch(userActions.setAuthUser(data.user));
      callback();
      dispatch(userActions.setFetchingSuccess(true));
    } catch (e) {
      handleAxiosError(e, dispatch);
    } finally {
      dispatch(userActions.setFetching(false));
    }
  };

export const signup =
  (
    name: string,
    email: string,
    password: string,
    callback: () => void
  ): ThunkAction<AppActionsType> =>
  async (dispatch) => {
    try {
      dispatch(userActions.setFetching(true));
      const data = (await userService.signup(name, email, password)).data;
      localStorage.setItem("token", data.accessToken);
      userActions.setIsAuth(true);
      userActions.setAuthUser(data.user);
      callback();
      dispatch(userActions.setFetchingSuccess(true));
    } catch (e) {
      handleAxiosError(e, dispatch);
    } finally {
      dispatch(userActions.setFetching(false));
    }
  };

export const logout = (): ThunkAction<AppActionsType> => async (dispatch) => {
  try {
    dispatch(userActions.setFetching(true));
    await userService.logout();
    localStorage.removeItem("token");
    dispatch(userActions.setIsAuth(false));
    dispatch(userActions.setAuthUser(null as IUser | null));
    dispatch(userActions.setModalMessage(Messages.EXIT_FROM_ACCOUNT));
    dispatch(userActions.setFetchingSuccess(true));
  } catch (e) {
    handleAxiosError(e, dispatch);
  } finally {
    dispatch(userActions.setFetching(false));
  }
};

export const checkAuth =
  (): ThunkAction<AppActionsType> => async (dispatch) => {
    try {
      dispatch(userActions.setFetching(true));
      const response = await userService.refresh();
      const data = response.data;
      localStorage.setItem("token", data.accessToken);
      dispatch(userActions.setIsAuth(true));
      dispatch(userActions.setAuthUser(data.user));
      dispatch(userActions.setFetchingSuccess(true));
    } catch (e) {
      dispatch(userActions.setFetchingError(true));
      dispatch(userActions.setFetchingSuccess(false));
    } finally {
      dispatch(userActions.setFetching(false));
    }
  };

export const clearModalMessage =
  (): ThunkAction<AppActionsType> => async (dispatch) => {
    console.log("here");
    dispatch(userActions.setModalMessage(""));
  };
