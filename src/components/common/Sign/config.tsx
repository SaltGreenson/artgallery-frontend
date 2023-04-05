import React, { HTMLAttributes } from "react";
import Dress from "@/components/common/Sign/Dress";
import Heart from "@/components/common/Sign/Heart";
import Logo from "@/components/common/Sign/Logo";

export interface ISignConfig
  extends HTMLAttributes<HTMLButtonElement | SVGElement> {
  color?: string;
  fontSize?: string;
  inFavourites?: boolean;
}

export const signTypesConfig = (props: ISignConfig) => ({
  dress: <Dress {...props} />,
  heart: <Heart {...props} />,
  logo: <Logo {...props} />,
});
