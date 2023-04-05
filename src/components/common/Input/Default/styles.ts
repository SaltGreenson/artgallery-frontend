import Paragraph from "@/components/common/Paragraph";
import React from "react";

import styled, { css } from "styled-components";

import { Colors } from "@/styles/colors";

export interface StyledInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  error?: string;
  initialType?: string;
  isDarkTheme?: boolean;
}

export const InputStyled = styled.input<StyledInputProps>`
  width: 100%;
  height: 44px;
  padding: 13px 4% 12px 4%;
  font-family: "Gotham Pro Medium", serif;
  font-size: 15px;
  color: ${Colors.BLACK};
  border: 1px solid ${Colors.LINE_COLOR};
  border-radius: 3px;
  background-color: transparent;
  outline: none;
  transition: border 300ms;

  &:focus {
    border: 1px solid ${Colors.DARK_BLUE};
  }

  &:active {
    border: 1px solid ${Colors.DARK_BLUE};
  }

  &::placeholder {
    font-family: "Gotham Pro", serif;
    color: ${Colors.DARK_GREY_FOR_TEXT};
  }

  ${({ isDarkTheme }) =>
    isDarkTheme &&
    css`
      border: 1px solid ${Colors.GREY_FOR_INPUT};
      border-radius: 6px;
      color: ${Colors.MEDIUM_GREY};
    `};

  ${({ initialType }) =>
    initialType === "password" &&
    css`
      padding-right: 50px;
    `};

  ${({ error }) =>
    error &&
    css`
      border: 1px solid ${Colors.ERROR_BORDER_COLOR};
      animation: shake 300ms ease-out;

      &:focus {
        border: 1px solid ${Colors.ERROR_BORDER_COLOR};
      }

      &:active {
        border: 1px solid ${Colors.ERROR_BORDER_COLOR};
      }

      @keyframes shake {
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
      }
    `}
`;

export const PasswordTitle = styled(Paragraph)`
  font-family: "Gotham Pro Medium", serif;
  font-size: 14px;
  position: absolute;
  top: 16px;
  right: 5px;
  cursor: pointer;
  user-select: none;
`;