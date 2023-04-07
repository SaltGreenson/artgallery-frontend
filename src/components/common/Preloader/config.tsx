import React from "react";
import Preloader from "./Default";
import SkeletonCard from "@/components/common/Preloader/Skeleton";

export const preloaderTypesConfig = {
  default: <Preloader />,
  card: <SkeletonCard />,
};
