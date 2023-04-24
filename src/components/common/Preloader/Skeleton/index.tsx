import React, { HTMLAttributes } from "react";
import { DynamicOptionsLoadingProps } from "next/dynamic";

import {
  SkeletonLoader,
  StyledSkeletonCard,
  StyledSkeletonCardContentContainer,
  StyledSkeletonCardImage,
  StyledSkeletonCardText,
} from "@/components/common/Preloader/Skeleton/styles";

export type SkeletonPreloaderProps = HTMLAttributes<HTMLDivElement> &
  DynamicOptionsLoadingProps;

const SkeletonCard = ({ ...props }: SkeletonPreloaderProps) => (
  <StyledSkeletonCard {...props}>
    <SkeletonLoader isLightTheme />
    <StyledSkeletonCardImage>
      <SkeletonLoader />
    </StyledSkeletonCardImage>
    <StyledSkeletonCardContentContainer>
      <StyledSkeletonCardText width="100%">
        <SkeletonLoader />
      </StyledSkeletonCardText>
      <StyledSkeletonCardText width="35%">
        <SkeletonLoader />
      </StyledSkeletonCardText>
    </StyledSkeletonCardContentContainer>
  </StyledSkeletonCard>
);

export default SkeletonCard;
