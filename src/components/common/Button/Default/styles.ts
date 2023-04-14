import styled from "styled-components";
import { Colors } from "@/styles/colors";

export type StyledButtonProps = {
  bgColor?: string;
  bgHover?: string;
  brRadius?: string;
};

export const StyledDefaultButton = styled.button<StyledButtonProps>`
  width: 100%;
  height: 42px;
  background-color: ${({ bgColor = Colors.PURPLE }) => bgColor};
  border-radius: ${({ brRadius = "40px" }) => brRadius};
  cursor: pointer;
  transition: 300ms;
  will-change: transform, background-color;

  &:hover {
    background-color: ${({ bgHover = Colors.DARK_PURPLE }) => bgHover};
  }

  &:active {
    transform: scale(0.97);
  }

  &:disabled {
    cursor: default;
  }
`;
