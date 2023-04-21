import {
  InputConfigProps,
  inputTypesConfig,
} from "@/components/common/Input/config";

interface ICustomInputProps {
  variant:
    | "checkbox"
    | "default"
    | "dynamicLabel"
    | "search"
    | "file"
    | "toggle";
}

const CustomInput = ({
  variant,
  ...props
}: ICustomInputProps & InputConfigProps) => inputTypesConfig(props)[variant];

export default CustomInput;
