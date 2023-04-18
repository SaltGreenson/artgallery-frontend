export interface ILikeDislikeResponse {
  _id: string;
  likedPosts: [{ _id: string }];
  dislikedPosts: [{ _id: string }];
}
