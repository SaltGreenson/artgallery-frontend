import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { Colors } from "@/styles/colors";
import { VscError } from "react-icons/vsc";

export const notificationIconConfig = {
  info: <AiOutlineInfoCircle fontSize="30px" color={Colors.PURPLE} />,
  error: <VscError fontSize="30px" color={Colors.RED} />,
};

export const notificationTitleConfig = {
  info: "Information",
  error: "Error",
};

export const notificationBarColorConfig = {
  info: Colors.PURPLE,
  error: Colors.RED,
};

export const notificationTitleColorConfig = {
  info: Colors.PURPLE,
  error: Colors.RED,
};
