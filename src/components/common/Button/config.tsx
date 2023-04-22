import React from "react";

import Default, { IDefaultButtonProps } from "./Default";
import Transparent, { ITransparentButtonProps } from "./Transparent";
import { StyledButtonProps } from "./Default/styles";

export type ButtonTypeConfig = ITransparentButtonProps &
  IDefaultButtonProps &
  StyledButtonProps;

export const buttonTypesConfig = ({ children, ...rest }: ButtonTypeConfig) => ({
  default: <Default {...rest}>{children}</Default>,
  transparent: <Transparent {...rest}>{children}</Transparent>,
});
