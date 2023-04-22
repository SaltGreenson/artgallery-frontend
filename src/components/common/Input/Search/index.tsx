import {
  InputSearchConfigType,
  inputSearchConfig,
} from "@/components/common/Input/Search/config";

export interface IInputSearchProps {
  dimension?: "small" | "large";
}

const Index = ({
  dimension,
  ...props
}: IInputSearchProps & InputSearchConfigType): JSX.Element =>
  inputSearchConfig(props)[dimension ?? "small"];

export default Index;
