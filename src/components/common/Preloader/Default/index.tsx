import React, { HTMLAttributes } from "react";
import {
  StyledPreloaderContainer,
  StyledPreloaderSign,
} from "@/components/common/Preloader/Default/styles";
import { DynamicOptionsLoadingProps } from "next/dynamic";

const Default = ({
  ...props
}: HTMLAttributes<HTMLDivElement> & DynamicOptionsLoadingProps) => (
  <StyledPreloaderContainer {...props}>
    <StyledPreloaderSign />
  </StyledPreloaderContainer>
);

export default Default;
