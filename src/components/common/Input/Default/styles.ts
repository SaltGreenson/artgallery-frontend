import Paragraph from "@/components/common/Paragraph";
import React from "react";

import styled, { css } from "styled-components";

import { Colors } from "@/styles/colors";
import { shakeAnimation } from "@/styles/keyframes";

export interface StyledInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  error?: string;
  initialType?: string;
  isDarkTheme?: boolean;
}

export const PasswordTitle = styled(Paragraph)`
  position: absolute;
  top: 16px;
  right: 5px;
  font-family: "Gotham Pro Medium", serif;
  font-size: 14px;
  transition: color 200ms;
  cursor: pointer;
  user-select: none;
`;

export const InputStyled = styled.input<StyledInputProps>`
  width: 100%;
  height: 44px;
  padding: 13px 4% 12px 4%;
  font-family: "Gotham Pro Medium", serif;
  font-size: 15px;
  color: ${Colors.BLACK};
  border: 1px solid ${Colors.LINE_COLOR};
  border-radius: 3px;
  background-color: ${Colors.WHITE};
  outline: none;
  transition: border 200ms, box-shadow 200ms, color 200ms;

  &:focus {
    box-shadow: 0 0 8px ${Colors.PURPLE};
    color: ${Colors.DARK_PURPLE};
    & ~ ${PasswordTitle} {
      color: ${Colors.PURPLE};
    }
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
      animation: ${shakeAnimation} 300ms ease-out;

      &:focus {
        border: 1px solid ${Colors.ERROR_BORDER_COLOR};
      }
    `}
`;
