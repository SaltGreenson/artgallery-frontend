import {
  ITitleConfig,
  titleTypesConfig,
} from "@/components/common/Title/config";

interface ITitleProps {
  variant: "small" | "medium" | "large" | "thin";
}

const CustomTitle = ({
  variant,
  ...props
}: ITitleProps & ITitleConfig): JSX.Element => titleTypesConfig(props)[variant];

export default CustomTitle;
