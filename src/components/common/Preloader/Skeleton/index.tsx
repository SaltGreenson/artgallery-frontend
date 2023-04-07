import React, { HTMLAttributes } from "react";
import { DynamicOptionsLoadingProps } from "next/dynamic";

import {
  SkeletonLoader,
  StyledSkeletonCard,
  StyledSkeletonCardContentContainer,
  StyledSkeletonCardImage,
  StyledSkeletonCardText,
} from "@/components/common/Preloader/Skeleton/styles";

const SkeletonCard = ({
  ...props
}: HTMLAttributes<HTMLDivElement> & DynamicOptionsLoadingProps) => (
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
