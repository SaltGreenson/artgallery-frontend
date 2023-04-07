import styled from "styled-components";
import { Colors } from "@/styles/colors";

export const StyledPreloaderContainer = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  min-width: 100%;
  min-height: 100%;
`;

export const StyledPreloaderSign = styled.div`
  width: 40px;
  height: 40px;
  border: 3px solid ${Colors.ICE};
  border-radius: 50%;
  border-bottom-color: ${Colors.DARK_BLUE};
  animation: infinityRotation infinite 1000ms linear;

  @keyframes infinityRotation {
    0% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
