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
  will-change: left, transform;

  &:hover {
    background-color: ${({ bgHover = Colors.DARK_PURPLE }) => bgHover};
  }

  &:active {
    transform: scale(0.97);
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
