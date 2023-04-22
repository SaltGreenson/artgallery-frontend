import React, { ReactNode } from "react";

import { LabelDescription, LabelDescriptionPropsType } from "./styles";

export interface CustomLabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
  isPreventDefault?: boolean;
}

const Index = ({
  children,
  isPreventDefault,
  ...rest
}: CustomLabelProps & LabelDescriptionPropsType): JSX.Element => (
  <LabelDescription
    {...rest}
    onClick={(e) => isPreventDefault && e.preventDefault()}
  >
    {children}
  </LabelDescription>
);

export default Index;
