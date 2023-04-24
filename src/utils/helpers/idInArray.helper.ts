import { ILikedPosts } from "@/models/ILikedPosts";
import { IDislikedPosts } from "@/models/IDislikedPosts";

export const isIdInArrayHelper = (
  variable: string,
  array: ILikedPosts[] | IDislikedPosts[]
) => array.findIndex((e) => e._id === variable) !== -1;
