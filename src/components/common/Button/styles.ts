import { Colors } from "@/styles/colors";
import styled from "styled-components";

export type PrimaryProps = {
  bgColor?: string;
  bgHover?: string;
  brRadius?: string;
  height?: string;
  width?: string;
};

export const StyledPrimaryButton = styled.button<PrimaryProps>`
  width: ${({ width = "206px" }) => width};
  height: ${({ height = "42px" }) => height};
  background-color: ${({ bgColor = Colors.PURPLE }) => bgColor};
  border-radius: ${({ brRadius = "40px" }) => brRadius};
  cursor: pointer;
  transition: 300ms;
  overflow: hidden;
  will-change: left;

  &:hover {
    background-color: ${({ bgHover = Colors.DARK_PURPLE }) => bgHover};
  }

  &:disabled {
    cursor: default;
    background-color: ${Colors.LIGHT_ICE};

    &:hover {
      background-color: ${Colors.LIGHT_ICE};
    }
  }
`;

export const StyledSecondaryButton = styled(StyledPrimaryButton)`
  background-color: ${Colors.LIGHT_ICE};

  &:hover {
    background-color: ${Colors.ICE};
  }

  &:disabled {
    cursor: default;
    background-color: ${Colors.LIGHT_ICE};

    &:hover {
      background-color: ${Colors.LIGHT_ICE};
    }
  }
`;

export const StyledOutlinedButton = styled(StyledPrimaryButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: ${Colors.WHITE};
  border: 1px solid ${Colors.ICE};

  &:hover {
    background-color: ${Colors.LIGHT_ICE};
  }

  &:disabled {
    cursor: default;
    background-color: ${Colors.LIGHT_ICE};

    &:hover {
      background-color: ${Colors.LIGHT_ICE};
    }
  }
`;

export const StyledIconButton = styled.button`
  background-color: transparent;
  cursor: pointer;
`;

export const StyledTextButton = styled.button`
  background-color: transparent;
  cursor: pointer;
`;

export const StyledButtonBarContainer = styled.div<{ color: string }>`
  width: 98%;
  margin: 0 auto;
  position: relative;
  border-radius: 10px;
  height: 4px;
  background-color: ${({ color }) => color};
  overflow: hidden;
`;

export const StyledButtonBarLineContainer = styled.div<{ color: string }>`
  width: calc(100% / 3);
  position: absolute;
  border-bottom: 4px solid ${({ color }) => color};
  border-radius: 10px;
  animation: loading infinite 1.5s linear;

  @keyframes loading {
    0% {
      left: calc(100% / 4 * -1);
    }

    50% {
      left: calc(100% / 4 + (100% - 100% / 3));
    }

    100% {
      left: calc(100% / 4 * -1);
    }
  }
`;
