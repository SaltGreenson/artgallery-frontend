import { ToggleElementType } from "@/components/common/Input/Toggle";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";
import React from "react";
import { MdOutlineDisabledByDefault } from "react-icons/md";
import { Colors } from "@/styles/colors";

export const toggleSortTypeConfig = (
  defaultChecked?: string
): ToggleElementType[] => [
  {
    icon: <BsArrowUp fontSize="20px" color={Colors.FONT_SIZE_GREY} />,
    label: "likes",
    key: "true",
    defaultChecked: defaultChecked === "true",
  },
  {
    icon: <BsArrowDown fontSize="20px" color={Colors.FONT_SIZE_GREY} />,
    label: "likes",
    key: "false",
    defaultChecked: defaultChecked === "false",
  },
  {
    label: "default",
    icon: (
      <MdOutlineDisabledByDefault
        fontSize="20px"
        color={Colors.FONT_SIZE_GREY}
      />
    ),
    defaultChecked: defaultChecked === "" || defaultChecked === null,
  },
];
