import {
  IParagraphConfig,
  paragraphTypesConfig,
} from "@/components/common/Paragraph/config";

import { IStyledOutlinedPropsTypes, IStyledPPropsTypes } from "./styles";

export interface IParagraphProps {
  variant?: "default" | "outlined";
}

const Paragraph = ({
  variant,
  ...props
}: IStyledPPropsTypes &
  IParagraphProps &
  IStyledOutlinedPropsTypes &
  IParagraphConfig): JSX.Element =>
  paragraphTypesConfig(props)[variant ?? "default"];

export default Paragraph;
