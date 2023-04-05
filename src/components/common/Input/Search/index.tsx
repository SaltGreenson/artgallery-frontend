import {
  IInputSearchConfig,
  inputSearchConfig,
} from "@/components/common/Input/Search/config";

interface InputSearchProps {
  dimension?: "small" | "large";
}

const Index = ({
  dimension,
  ...props
}: InputSearchProps & IInputSearchConfig): JSX.Element =>
  inputSearchConfig(props)[dimension ?? "small"];

export default Index;
