import { ILikedPosts } from "@/models/ILikedPosts";

export interface IAuthUser {
  _id: string;
  name: string;
  email: string;
  password: string;
  likesCount: number;
  postsCount: number;
  likedPosts: ILikedPosts;
  createdAt: Date;
}

export interface IUser {
  _id: string;
  name: string;
  likedPosts: [{ _id: string }];
}
