import { Colors } from "@/styles/colors";
import styled from "styled-components";

export const StyledUserIconContainer = styled.div<{ isActive: boolean }>`
  width: ${({ isActive }) => (isActive ? "90px" : "60px")};
  height: ${({ isActive }) => (isActive ? "90px" : "60px")};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.LIGHT_ORANGE};
  border-radius: 50%;
  user-select: none;
  will-change: width, height, font-size;
  transition: width 300ms, height 300ms, font-size 300ms;

  & > p {
    transition: font-size 300ms;
    font-size: ${({ isActive }) => (isActive ? "80px" : "56px")};
  }
`;
