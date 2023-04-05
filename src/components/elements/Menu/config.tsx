import React, { ReactElement } from "react";
import { Colors } from "@/styles/colors";
import { AiOutlinePlusCircle, AiOutlineStar } from "react-icons/ai";
import { BiExit, BiHomeAlt, BiInfoCircle, BiLockAlt } from "react-icons/bi";
import { BsSun } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";

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
    icon: <BiHomeAlt fontSize="30px" color={menuIconColorsConfig.inactive} />,
    title: "Главная",
  },
  {
    icon: (
      <AiOutlineStar fontSize="30px" color={menuIconColorsConfig.inactive} />
    ),
    title: "Избранное",
  },
  {
    icon: (
      <AiOutlinePlusCircle
        fontSize="30px"
        color={menuIconColorsConfig.inactive}
      />
    ),
    title: "Новое объявление",
  },
];

export const menuSettingLinksConfig: MenuLinkType[] = [
  {
    icon: (
      <IoPersonOutline fontSize="30px" color={menuIconColorsConfig.inactive} />
    ),
    title: "Персональные данные",
  },
  {
    icon: (
      <BiInfoCircle fontSize="30px" color={menuIconColorsConfig.inactive} />
    ),
    title: "Контактная информация",
  },
  {
    icon: <BiLockAlt fontSize="30px" color={menuIconColorsConfig.inactive} />,
    title: "Безопасность",
  },
  {
    icon: <BsSun fontSize="30px" color={menuIconColorsConfig.inactive} />,
    title: "Светлая тема",
  },
  {
    icon: <BiExit fontSize="30px" color={menuIconColorsConfig.inactive} />,
    title: "Выйти",
  },
];
