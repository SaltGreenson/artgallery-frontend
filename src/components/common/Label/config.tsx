import React, { HTMLAttributes, ReactNode } from "react";

import Default from "./Default";
import Error from "./Error";
import { LabelDescriptionPropsType } from "@/components/common/Label/Default/styles";

export interface ILabelConfig extends HTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
  isPreventDefault?: boolean;
  fontSize?: "12px" | "14px" | "16px" | string;
}

export const labelTypesConfig = ({
  children,
  ...rest
}: ILabelConfig & LabelDescriptionPropsType) => ({
  error: <Error {...rest}>{children}</Error>,
  default: <Default {...rest}>{children}</Default>,
});
