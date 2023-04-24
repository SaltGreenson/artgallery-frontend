import React, { ReactNode } from "react";
import { StyledButtonProps } from "../Default/styles";
import { StyledTransparentButton } from "./styles";

export interface ITransparentButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isFetching?: boolean;
}

const TransparentButton = ({
  children,
  isFetching,
  ...props
}: ITransparentButtonProps & StyledButtonProps) => (
  <StyledTransparentButton {...props} disabled={isFetching}>
    {children}
  </StyledTransparentButton>
);

export default TransparentButton;
