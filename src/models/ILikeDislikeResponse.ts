import { IGallery } from "@/models/IGallery";

export interface ILikeDislikeResponse {
  _id: string;
  likedPosts: IGallery[];
  dislikedPosts: IGallery[];
}
