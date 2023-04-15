import {
  TitleConfigType,
  titleTypesConfig,
} from "@/components/common/Title/config";

interface ITitleProps {
  variant: "small" | "medium" | "large" | "thin";
}

const CustomTitle = ({
  variant,
  ...props
}: ITitleProps & TitleConfigType): JSX.Element =>
  titleTypesConfig(props)[variant];

export default CustomTitle;
