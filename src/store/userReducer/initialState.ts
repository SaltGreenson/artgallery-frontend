import { IAuthUser } from "@/models/IUser";
import { IGallery } from "@/models/IGallery";

export const initialState = {
  message: "",
  isFetching: false,
  fetchingSuccess: false,
  fetchingError: false,
  isAuth: false,
  authUser: null as IAuthUser | null,
  likedPosts: null as IGallery[] | null,
};
