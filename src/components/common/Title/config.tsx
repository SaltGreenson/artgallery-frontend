import React from "react";
import LargeTitle, { TitlePropsType } from "@/components/common/Title/Large";
import SmallTitle from "@/components/common/Title/Small";
import MediumTitle from "@/components/common/Title/Medium";
import ThinTitle from "@/components/common/Title/Thin";

export type TitleConfigType = TitlePropsType;

export const titleTypesConfig = ({ children, ...rest }: TitleConfigType) => ({
  small: <SmallTitle {...rest}>{children}</SmallTitle>,
  medium: <MediumTitle {...rest}>{children}</MediumTitle>,
  large: <LargeTitle {...rest}>{children}</LargeTitle>,
  thin: <ThinTitle {...rest}>{children}</ThinTitle>,
});
