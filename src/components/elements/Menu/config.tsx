import React, { ReactElement } from "react";

import { AiOutlineFileSearch, AiOutlinePlusCircle } from "react-icons/ai";
import { BsList, BsViewList } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import { BiExit, BiLockAlt } from "react-icons/bi";
import { RxExit } from "react-icons/rx";
import { HiOutlineHeart, HiOutlinePhotograph } from "react-icons/hi";

import { Colors } from "@/styles/colors";

export enum DisplayStyleText {
  FULL = "Full-size view",
}

export type MenuLinkType = {
  icon: ReactElement;
  title: string;
  href: string;
};

export type MenuDropDownLinkType = {
  icon: ReactElement;
  title: string;
};

const iconGreyProps = { fontSize: "30px", color: Colors.FONT_SIZE_GREY };
const iconPurpleProps = { fontSize: "30px", color: Colors.PURPLE };

export const iconLogInLogOutUserConfig = (isAuth?: boolean): MenuLinkType =>
  isAuth
    ? {
        title: "Log Out",
        icon: <RxExit {...iconGreyProps} />,
        href: "/gallery",
      }
    : {
        title: "Log In",
        icon: <BiExit {...iconGreyProps} />,
        href: "/log-in",
      };

export const displayStyleIconConfig = (isFullSize: boolean) =>
  isFullSize ? (
    <BsList {...iconPurpleProps} />
  ) : (
    <BsViewList {...iconPurpleProps} />
  );

export const menuIconColorsConfig = {
  active: Colors.WHITE,
  inactive: Colors.FONT_SIZE_GREY,
};

const menuAuthLinksConfig: MenuLinkType[] = [
  {
    icon: <AiOutlineFileSearch {...iconGreyProps} />,
    title: "Gallery",
    href: "/gallery",
  },
  {
    icon: <HiOutlineHeart {...iconGreyProps} />,
    title: "Liked",
    href: "/liked",
  },
  {
    icon: <HiOutlinePhotograph {...iconGreyProps} />,
    title: "Own arts",
    href: "/own-arts",
  },
  {
    icon: <AiOutlinePlusCircle {...iconGreyProps} />,
    title: "New art",
    href: "/create",
  },
];

export const menuLinksConfig = (isAuth?: boolean): MenuLinkType[] =>
  isAuth
    ? menuAuthLinksConfig
    : [
        {
          icon: <AiOutlineFileSearch {...iconGreyProps} />,
          title: "Gallery",
          href: "/gallery",
        },
      ];

export const menuSettingLinksConfig: MenuLinkType[] = [
  {
    icon: <IoPersonOutline {...iconGreyProps} />,
    title: "Personal data",
    href: "/personal-data",
  },
  {
    icon: <BiLockAlt {...iconGreyProps} />,
    title: "Safety",
    href: "/safety",
  },
];
