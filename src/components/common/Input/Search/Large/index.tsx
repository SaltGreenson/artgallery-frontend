import React, { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { StyledLargeSearchInput } from "./styles";

export interface IInputLargeSearchProps
  extends InputHTMLAttributes<HTMLInputElement> {
  register?: UseFormRegisterReturn<string>;
  error?: string;
}

const LargeSearch = ({
  register,
  ...props
}: IInputLargeSearchProps): JSX.Element => (
  <StyledLargeSearchInput {...register} {...props} />
);

export default LargeSearch;
