import { IGallery } from "@/models/IGallery";

export interface IUser {
  _id: string;
  name: string;
  email: string;
  password: string;
  likesCount: number;
  postsCount: number;
  likedPosts: IGallery[];
  createdAt: Date;
}
