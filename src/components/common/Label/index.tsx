import {
  ILabelConfig,
  labelTypesConfig,
} from "@/components/common/Label/config";
import { LabelDescriptionPropsType } from "@/components/common/Label/Default/styles";

interface ILabelProps {
  variant?: "default" | "error";
}

const CustomLabel = ({
  variant,
  ...props
}: ILabelProps & ILabelConfig & LabelDescriptionPropsType) =>
  labelTypesConfig(props)[variant ?? "default"];

export default CustomLabel;
