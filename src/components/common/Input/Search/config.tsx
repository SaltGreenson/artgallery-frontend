import React, { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

import {
  StyledLargeSearchInput,
  StyledSmallSearchInput,
} from "@/components/common/Input/Search/styles";

export interface IInputSearchConfig
  extends InputHTMLAttributes<HTMLInputElement> {
  register?: UseFormRegisterReturn<string>;
  error?: string;
}

export const inputSearchConfig = ({
  register,
  ...props
}: IInputSearchConfig) => ({
  small: <StyledSmallSearchInput {...register} {...props} />,
  large: <StyledLargeSearchInput {...register} {...props} />,
});
