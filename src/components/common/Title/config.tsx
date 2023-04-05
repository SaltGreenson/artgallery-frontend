import React, { HTMLAttributes, ReactNode } from "react";

import {
  StyledLarge,
  StyledMedium,
  StyledSmall,
  StyledSmallThin,
} from "@/components/common/Title/styles";

export interface ITitleConfig extends HTMLAttributes<HTMLHeadElement> {
  children: ReactNode;
  color?: string;
  fontSize?: string;
}

export const titleTypesConfig = ({
  children,
  fontSize,
  ...rest
}: ITitleConfig) => ({
  small: <StyledSmall {...rest}>{children}</StyledSmall>,
  medium: <StyledMedium {...rest}>{children}</StyledMedium>,
  large: <StyledLarge {...rest}>{children}</StyledLarge>,
  thin: (
    <StyledSmallThin fontSize={fontSize} {...rest}>
      {children}
    </StyledSmallThin>
  ),
});
