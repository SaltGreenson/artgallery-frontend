import { ISignConfig, signTypesConfig } from "@/components/common/Sign/config";

interface ISignProps {
  variant: "dress" | "heart" | "logo";
}

const Sign = ({ variant, ...props }: ISignProps & ISignConfig) =>
  signTypesConfig(props)[variant];

export default Sign;
