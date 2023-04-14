import {
  ButtonTypeConfig,
  buttonTypesConfig,
} from "@/components/common/Button/config";

interface IButtonProps {
  variant: "default" | "transparent";
}

const CustomButton = ({
  variant,
  ...props
}: IButtonProps & ButtonTypeConfig): JSX.Element =>
  buttonTypesConfig(props)[variant];

export default CustomButton;
