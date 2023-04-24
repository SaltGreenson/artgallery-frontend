import React from "react";

import { TitlePropsType } from "../Large";
import { StyledThinTitle } from "./styles";

const ThinTitle = ({ children, ...rest }: TitlePropsType) => (
  <StyledThinTitle {...rest}>{children}</StyledThinTitle>
);

export default ThinTitle;
