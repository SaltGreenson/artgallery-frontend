import React from "react";

import { TitlePropsType } from "../Large";
import { StyledSmallTitle } from "./styles";

const SmallTitle = ({ children, ...rest }: TitlePropsType) => (
  <StyledSmallTitle {...rest}>{children}</StyledSmallTitle>
);

export default SmallTitle;
