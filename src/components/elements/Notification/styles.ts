import styled from "styled-components";
import { Colors } from "@/styles/colors";
import { widthFrom100to0Animation } from "@/styles/keyframes";

export const StyledNotificationContainer = styled.div<{ isActive?: boolean }>`
  z-index: 102;
  width: 300px;
  position: fixed;
  padding-top: 10px;
  right: ${({ isActive }) => (isActive ? "10px" : "-100%")};
  top: 10px;
  transition: right 200ms ease-in;
  background-color: ${Colors.WHITE};
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.08);
  border: 4px solid ${Colors.WHITE};

  @media (max-width: 1024px) {
    top: 20px;
    right: ${({ isActive }) => (isActive ? "10px" : "-100%")};
  }
`;

export const StyledNotificationMessageContainer = styled.div`
  padding: 10px 0 10px 10px;
`;

export const StyledNotificationCrossContainer = styled.div`
  position: absolute;
  right: 3px;
  top: 3px;
  cursor: pointer;
`;

export const StyledNotificationBar = styled.div<{ color: string }>`
  width: 0;
  border-bottom: 4px solid ${({ color }) => color};
  animation: 3s ${widthFrom100to0Animation} linear;
`;
