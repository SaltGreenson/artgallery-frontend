import { keyframes } from "styled-components";
import { Colors } from "@/styles/colors";

export const loadingAnimation = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(100%);
  }
`;

export const appearAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const shakeAnimation = keyframes`
  0% {
    transform: translateX(-3px);
    border: 2px solid ${Colors.RED};
  }
  25% {
    transform: translateX(3px);
  }
  50% {
    transform: translateX(-3px);
  }
  100% {
    transform: translateX(0px);
  }
`;

export const infinityRotationAnimation = keyframes`
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
`;

export const changeIconAnimation = keyframes`
  0% {
    transform: rotate(90deg);
    opacity: 0.75;
  }

  25% {
    transform: rotate(180deg);
    opacity: 0.5;
  }

  50% {
    transform: rotate(270deg);
    opacity: 0.75;
  }

  100% {
    transform: rotate(360deg);
    opacity: 1;
  }
`;

export const widthFrom100to0Animation = keyframes`
  0% {
    width: 100%;
  }
  100% {
    width: 0;
  }
`;
