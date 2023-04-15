import React from "react";

import { TitlePropsType } from "../Large";
import { StyledMediumTitle } from "@/components/common/Title/Medium/styles";

const MediumTitle = ({ children, ...rest }: TitlePropsType) => (
  <StyledMediumTitle {...rest}>{children}</StyledMediumTitle>
);

export default MediumTitle;
