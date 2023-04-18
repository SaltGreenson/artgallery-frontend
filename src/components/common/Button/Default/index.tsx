import React, { ButtonHTMLAttributes, ReactNode } from "react";

import { defaultButtonDisplayStyle } from "./config";

import {
  StyledButtonProps,
  StyledDefaultButton,
} from "@/components/common/Button/Default/styles";

export interface IDefaultButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  color?: string;
  isFetching?: boolean;
}

const DefaultButton = ({
  children,
  color,
  isFetching,
  ...props
}: IDefaultButtonProps & StyledButtonProps) => (
  <StyledDefaultButton {...props} disabled={isFetching}>
    {defaultButtonDisplayStyle(children, isFetching, color)}
  </StyledDefaultButton>
);

export default DefaultButton;
