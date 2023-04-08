import React, { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

import Checkbox from "./Checkbox";
import Default from "./Default";
import DynamicLabel from "./DynamicLabel";
import Search from "./Search";
import InputFile, { IInputFileProps } from "@/components/common/Input/File";

export interface IInputConfig extends InputHTMLAttributes<HTMLInputElement> {
  dimension?: "small" | "large";
  error?: string;
  label: string;
  type?: string;
  register?: UseFormRegisterReturn<string>;
  width?: string;
}

export const inputTypesConfig = (props: IInputConfig & IInputFileProps) => ({
  checkbox: <Checkbox {...props} />,
  default: <Default {...props} />,
  dynamicLabel: <DynamicLabel {...props} />,
  search: <Search {...props} />,
  file: <InputFile {...props} />,
});
