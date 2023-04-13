import { IGallery } from "@/models/IGallery";

export interface ILikedPosts {
  _id: string;
  name: string;
  likedPosts: IGallery[];
}
