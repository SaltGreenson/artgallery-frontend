import React, { HTMLAttributes } from "react";
import {
  StyledPreloaderContainer,
  StyledPreloaderSign,
} from "@/components/common/Preloader/styles";
import { DynamicOptionsLoadingProps } from "next/dynamic";

const Preloader = ({
  ...props
}: HTMLAttributes<HTMLDivElement> & DynamicOptionsLoadingProps) => (
  <StyledPreloaderContainer {...props}>
    <StyledPreloaderSign />
  </StyledPreloaderContainer>
);

export default Preloader;
