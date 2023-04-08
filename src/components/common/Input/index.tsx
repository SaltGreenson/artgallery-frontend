import {
  IInputConfig,
  inputTypesConfig,
} from "@/components/common/Input/config";
import { IInputFileProps } from "@/components/common/Input/File";

interface IInputProps {
  variant: "checkbox" | "default" | "dynamicLabel" | "search" | "file";
}

const CustomInput = ({
  variant,
  ...props
}: IInputProps & IInputConfig & IInputFileProps) =>
  inputTypesConfig(props)[variant];

export default CustomInput;
