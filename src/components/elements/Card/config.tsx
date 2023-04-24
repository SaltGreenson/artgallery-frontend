import React from "react";
import {
  AiFillDislike,
  AiFillLike,
  AiOutlineDislike,
  AiOutlineLike,
} from "react-icons/ai";

import { Colors } from "@/styles/colors";

const iconProps = { fontSize: "30px", color: Colors.FONT_SIZE_GREY };

export const likeDislikeIconsConfig = (isLikedOrDisliked: boolean) => ({
  like: isLikedOrDisliked ? (
    <AiFillLike {...iconProps} />
  ) : (
    <AiOutlineLike {...iconProps} />
  ),
  dislike: isLikedOrDisliked ? (
    <AiFillDislike {...iconProps} />
  ) : (
    <AiOutlineDislike {...iconProps} />
  ),
});

export const likeDislikeFontColorConfig = {
  like: Colors.NEW_LIGHT_GREEN,
  dislike: Colors.NEW_LIGHT_RED,
  selfLiked: Colors.NEW_LIGHT_GREEN,
  selfDisliked: Colors.NEW_LIGHT_RED,
};
