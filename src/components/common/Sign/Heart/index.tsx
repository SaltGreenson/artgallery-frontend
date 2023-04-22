import React, { HTMLAttributes } from "react";
import { HeartContainer } from "@/components/common/Sign/Heart/styles";
import { HiHeart, HiOutlineHeart } from "react-icons/hi";
import { Colors } from "@/styles/colors";

interface HeartProps extends HTMLAttributes<HTMLButtonElement> {
  color?: string;
  fontSize?: string;
  inFavourites?: boolean;
}

const Heart = ({
  color,
  fontSize,
  inFavourites,
  ...props
}: HeartProps): JSX.Element => (
  <HeartContainer inFavourites={inFavourites} {...props}>
    {inFavourites ? (
      <HiHeart fontSize={fontSize ?? "25px"} color={Colors.RED} />
    ) : (
      <HiOutlineHeart
        fontSize={fontSize ?? "25px"}
        color={color ?? Colors.DARK_BLUE}
      />
    )}
  </HeartContainer>
);

export default Heart;
