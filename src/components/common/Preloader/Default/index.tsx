import React, { HTMLAttributes } from "react";
import {
  StyledPreloaderContainer,
  StyledPreloaderProps,
  StyledPreloaderSign,
} from "@/components/common/Preloader/Default/styles";
import { DynamicOptionsLoadingProps } from "next/dynamic";

export type DefaultPreloaderProps = HTMLAttributes<HTMLDivElement> &
  DynamicOptionsLoadingProps &
  StyledPreloaderProps;

const DefaultPreloader = ({ ...props }: DefaultPreloaderProps) => (
  <StyledPreloaderContainer {...props}>
    <StyledPreloaderSign {...props} />
  </StyledPreloaderContainer>
);

export default DefaultPreloader;
