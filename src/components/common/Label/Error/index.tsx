import React, { ReactNode } from "react";

import { StyledErrorLabel } from "./styles";

export interface ErrorLabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
  fontSize?: "12px" | "14px" | "16px" | string;
}

const Index = ({ children, ...rest }: ErrorLabelProps): JSX.Element => (
  <StyledErrorLabel {...rest}>{children}</StyledErrorLabel>
);

export default Index;
