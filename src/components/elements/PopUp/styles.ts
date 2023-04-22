import styled from "styled-components";
import { appearAnimation } from "@/styles/keyframes";

export const StyledPopUp = styled.div`
  z-index: 110;
  display: grid;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: all;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.51);
  opacity: 0;
  animation: ${appearAnimation} 300ms forwards;
`;

export const StyledPopUpContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
