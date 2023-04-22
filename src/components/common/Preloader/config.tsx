import React from "react";
import Preloader, { DefaultPreloaderProps } from "./Default";
import SkeletonCard, {
  SkeletonPreloaderProps,
} from "@/components/common/Preloader/Skeleton";

export type PreloaderTypesConfigProps = DefaultPreloaderProps &
  SkeletonPreloaderProps;

export const preloaderTypesConfig = (props: PreloaderTypesConfigProps) => ({
  default: <Preloader {...props} />,
  card: <SkeletonCard {...props} />,
});
