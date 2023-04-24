import React, { HTMLAttributes, ReactNode } from "react";
import { StyledOutlinedP, StyledP } from "@/components/common/Paragraph/styles";

export const fontSizeConfig = {
  small: "12px",
  medium: "15px",
  large: "20px",
};

export interface IParagraphConfig extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
  dimension?: "small" | "medium" | "large";
}

export const paragraphTypesConfig = ({
  children,
  dimension,
  ...rest
}: IParagraphConfig) => ({
  default: (
    <StyledP fontSize={fontSizeConfig[dimension ?? "medium"]} {...rest}>
      {children}
    </StyledP>
  ),
  outlined: (
    <StyledOutlinedP
      fontSize={fontSizeConfig[dimension ?? "medium"]}
      bold
      {...rest}
    >
      {children}
    </StyledOutlinedP>
  ),
});
