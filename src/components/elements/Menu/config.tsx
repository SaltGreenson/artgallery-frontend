import React, { ReactElement } from "react";

import { AiOutlineFileSearch, AiOutlinePlusCircle } from "react-icons/ai";
import { BsList, BsViewList } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import { BiExit, BiLockAlt } from "react-icons/bi";
import { RxExit } from "react-icons/rx";

import Sign from "@/components/common/Sign";

import { Colors } from "@/styles/colors";

export enum DisplayStyleText {
  FULL = "Full-size view",
}

export const iconLogInLogOutUserConfig = (isAuth?: boolean): MenuLinkType =>
  isAuth
    ? {
        title: "Log Out",
        icon: <RxExit fontSize="30px" color={Colors.FONT_SIZE_GREY} />,
      }
    : {
        title: "Log In",
        icon: <BiExit fontSize="30px" color={Colors.FONT_SIZE_GREY} />,
      };

export const displayStyleIconConfig = (isFullSize: boolean) =>
  isFullSize ? (
    <BsList fontSize="30px" color={Colors.PURPLE} />
  ) : (
    <BsViewList fontSize="30px" color={Colors.PURPLE} />
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
    icon: (
      <AiOutlineFileSearch
        fontSize="30px"
        color={menuIconColorsConfig.inactive}
      />
    ),
    title: "Search board",
  },
  {
    icon: (
      <Sign
        variant="heart"
        fontSize="30px"
        color={menuIconColorsConfig.inactive}
      />
    ),
    title: "Liked",
  },
  {
    icon: (
      <AiOutlinePlusCircle
        fontSize="30px"
        color={menuIconColorsConfig.inactive}
      />
    ),
    title: "New art",
  },
];

export const menuSettingLinksConfig: MenuLinkType[] = [
  {
    icon: (
      <IoPersonOutline fontSize="30px" color={menuIconColorsConfig.inactive} />
    ),
    title: "Personal data",
  },
  {
    icon: <BiLockAlt fontSize="30px" color={menuIconColorsConfig.inactive} />,
    title: "Safety",
  },
];
