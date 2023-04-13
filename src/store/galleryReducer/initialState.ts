import { IGallery } from "@/models/IGallery";

export type SortType = "isFirstLiked" | "isFirstDisliked" | null;

export const initialState = {
  galleries: null as IGallery[] | null,
};
