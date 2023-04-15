import styled from "styled-components";
import { Colors } from "@/styles/colors";
import { infinityRotationAnimation } from "@/styles/keyframes";

export interface StyledPreloaderProps {
  dimension?: string;
}

export const StyledPreloaderContainer = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  min-width: 100%;
  min-height: 100%;
`;

export const StyledPreloaderSign = styled.div<StyledPreloaderProps>`
  width: ${({ dimension = "40px" }) => dimension};
  height: ${({ dimension = "40px" }) => dimension};
  border: 3px solid ${Colors.ICE};
  border-radius: 50%;
  border-bottom-color: ${Colors.DARK_BLUE};
  animation: ${infinityRotationAnimation} infinite 1000ms linear;
`;
