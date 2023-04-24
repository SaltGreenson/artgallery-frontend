import {
  preloaderTypesConfig,
  PreloaderTypesConfigProps,
} from "@/components/common/Preloader/config";

interface IPreloaderProps {
  variant: "default" | "card";
}

const Preloader = ({
  variant,
  ...props
}: IPreloaderProps & PreloaderTypesConfigProps) =>
  preloaderTypesConfig(props)[variant];

export default Preloader;
