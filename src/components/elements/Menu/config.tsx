import React, { ReactElement } from "react";

import { AiOutlineFileSearch, AiOutlinePlusCircle } from "react-icons/ai";
import { BsList, BsViewList } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import { BiExit, BiLockAlt } from "react-icons/bi";
import { RxExit } from "react-icons/rx";
import { HiOutlineHeart } from "react-icons/hi";

import { Colors } from "@/styles/colors";

export enum DisplayStyleText {
  FULL = "Full-size view",
}

const iconGreyProps = { fontSize: "30px", color: Colors.FONT_SIZE_GREY };
const iconPurpleProps = { fontSize: "30px", color: Colors.PURPLE };

export const iconLogInLogOutUserConfig = (isAuth?: boolean): MenuLinkType =>
  isAuth
    ? {
        title: "Log Out",
        icon: <RxExit {...iconGreyProps} />,
      }
    : {
        title: "Log In",
        icon: <BiExit {...iconGreyProps} />,
      };

export const displayStyleIconConfig = (isFullSize: boolean) =>
  isFullSize ? (
    <BsList {...iconPurpleProps} />
  ) : (
    <BsViewList {...iconPurpleProps} />
  );

export type MenuLinkType = {
  icon: ReactElement;
  title: string;
};

export const menuIconColorsConfig = {
  active: Colors.WHITE,
  inactive: Colors.FONT_SIZE_GREY,
};

export const menuLinksConfig: MenuLinkType[] = [
  {
    icon: <AiOutlineFileSearch {...iconGreyProps} />,
    title: "Search board",
  },
  {
    icon: <HiOutlineHeart {...iconGreyProps} />,
    title: "Liked",
  },
  {
    icon: <AiOutlinePlusCircle {...iconGreyProps} />,
    title: "New art",
  },
];

export const menuSettingLinksConfig: MenuLinkType[] = [
  {
    icon: <IoPersonOutline {...iconGreyProps} />,
    title: "Personal data",
  },
  {
    icon: <BiLockAlt {...iconGreyProps} />,
    title: "Safety",
  },
];
