import {
  IInputConfig,
  inputTypesConfig,
} from "@/components/common/Input/config";

interface IInputProps {
  variant: "checkbox" | "default" | "dynamicLabel" | "search";
}

const CustomInput = ({ variant, ...props }: IInputProps & IInputConfig) =>
  inputTypesConfig(props)[variant];

export default CustomInput;
