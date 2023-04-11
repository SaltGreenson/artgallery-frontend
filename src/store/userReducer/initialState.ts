import { IUser } from "@/models/IUser";

export const initialState = {
  message: "",
  isFetching: false,
  fetchingSuccess: false,
  fetchingError: false,
  isAuth: false,
  authUser: null as IUser | null,
};
