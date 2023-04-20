import { IAuthUser } from "@/models/IUser";
import { ILikedPosts } from "@/models/ILikedPosts";
import { IDislikedPosts } from "@/models/IDislikedPosts";

export const initialState = {
  message: "",
  isFetching: false,
  fetchingSuccess: false,
  fetchingError: false,
  isAuth: false,
  authUser: null as IAuthUser | null,
  likedPosts: [] as ILikedPosts[],
  dislikedPosts: [] as IDislikedPosts[],
  postsCount: 0,
  likedCount: 0,
};
