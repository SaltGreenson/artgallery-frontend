import React from "react";

import Checkbox, { ICheckboxInputProps } from "./Checkbox";
import Default, { IDefaultInputProps } from "./Default";
import DynamicLabel, { IInputWithDynamicLabelProps } from "./DynamicLabel";
import Search, { IInputSearchProps } from "./Search";
import InputFile, { IInputFileProps } from "@/components/common/Input/File";
import { IInputSearchConfig } from "@/components/common/Input/Search/config";
import Toggle, { IToggleProps } from "@/components/common/Input/Toggle";

export type InputConfigProps = IInputSearchConfig &
  IInputSearchProps &
  IInputFileProps &
  IInputWithDynamicLabelProps &
  IDefaultInputProps &
  ICheckboxInputProps &
  IToggleProps;

export const inputTypesConfig = (props: InputConfigProps) => ({
  checkbox: <Checkbox {...props} />,
  default: <Default {...props} />,
  dynamicLabel: <DynamicLabel {...props} />,
  search: <Search {...props} />,
  file: <InputFile {...props} />,
  toggle: <Toggle {...props} />,
});
