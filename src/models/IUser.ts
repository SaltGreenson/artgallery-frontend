import { ILikedPosts } from "@/models/ILikedPosts";
import { IDislikedPosts } from "@/models/IDislikedPosts";

export interface IAuthUser {
  email: string;
  _id: string;
  name: string;
  likedCount: number;
  dislikedCount: number;
  postsCount: number;
  likedPosts: ILikedPosts[];
  dislikedPosts: IDislikedPosts[];
  createdAt: Date;
}

export interface IUser {
  _id: string;
  name: string;
  likedPosts: [{ _id: string }];
  dislikedPosts: [{ _id: string }];
}
