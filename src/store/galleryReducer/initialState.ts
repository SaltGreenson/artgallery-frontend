import { IGallery } from "@/models/IGallery";

export type SortType = "isFirstLiked" | "isFirstDisliked" | null;

export const initialState = {
  galleries: [] as IGallery[],
  likeFetching: false,
  dislikeFetching: false,
  galleryFetching: false,
};
