import React from "react";

import { BiDislike, BiLike } from "react-icons/bi";
import { AiFillDislike, AiFillLike } from "react-icons/ai";

import { Colors } from "@/styles/colors";

const iconProps = { fontSize: "30px", color: Colors.FONT_SIZE_GREY };

export const likeDislikeIconsConfig = {
  like: <BiLike {...iconProps} />,
  dislike: <BiDislike {...iconProps} />,
  selfLiked: <AiFillLike {...iconProps} />,
  selfDisliked: <AiFillDislike {...iconProps} />,
};

export const likeDislikeFontColorConfig = {
  like: Colors.NEW_LIGHT_GREEN,
  dislike: Colors.NEW_LIGHT_RED,
  selfLiked: Colors.GREEN,
  selfDisliked: Colors.RED,
};
