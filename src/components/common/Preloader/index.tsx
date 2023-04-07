import { preloaderTypesConfig } from "@/components/common/Preloader/config";

interface IPreloaderProps {
  variant: "default" | "card";
}

const Preloader = ({ variant }: IPreloaderProps) =>
  preloaderTypesConfig[variant];

export default Preloader;
