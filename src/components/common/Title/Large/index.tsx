import React, { HTMLAttributes, ReactNode } from "react";

import { IStyledTitleProps, StyledLargeTitle } from "./styles";

interface ITitleProps extends HTMLAttributes<HTMLHeadElement> {
  children: ReactNode;
}

export type TitlePropsType = ITitleProps & IStyledTitleProps;

const LargeTitle = ({ children, ...rest }: TitlePropsType) => (
  <StyledLargeTitle {...rest}>{children}</StyledLargeTitle>
);

export default LargeTitle;
