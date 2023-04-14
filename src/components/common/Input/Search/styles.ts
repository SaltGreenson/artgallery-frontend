import styled, { css } from "styled-components";

import { Colors } from "@/styles/colors";
import { shakeAnimation } from "@/styles/keyframes";

export const StyledSmallSearchInput = styled.input`
  position: relative;
  width: 30px;
  height: 30px;
  padding-left: 30px;
  line-height: 10px;
  border-radius: 50px;
  font-family: inherit;
  font-size: 15px;
  cursor: pointer;
  overflow: hidden;
  background: transparent url(/Icons/searchIcon.svg) no-repeat 7px 5px;
  transition: width 400ms, background-position 400ms, border 300ms;
  outline: none;
  color: ${Colors.DARK_BLUE};

  &:focus {
    width: 200px;
    cursor: text;
    color: ${Colors.INPUT_FONT_COLOR};
    border: 1px solid ${Colors.GREY};
  }
`;

export const StyledLargeSearchInput = styled.input<{ error?: string }>`
  height: 44px;
  width: 100%;
  padding-right: 20px;
  padding-left: 30px;
  padding-top: 3px;
  font-size: 18px;
  line-height: 44px;
  color: ${Colors.BLACK};
  border: 1px solid ${Colors.LINE_COLOR};
  border-radius: 50px;
  background: ${Colors.WHITE} url(/Icons/searchIcon.svg) no-repeat 7px 45%;
  transition: border 300ms, background 300ms;
  outline: none;
  color: ${Colors.BLACK};

  &:focus {
    border: 1px solid ${Colors.DARK_BLUE};
    background: ${Colors.WHITE} url(/Icons/searchIconActive.svg) no-repeat 7px
      45%;
  }

  &:active {
    border: 1px solid ${Colors.DARK_BLUE};
  }

  &::placeholder {
    color: ${Colors.PLACEHOLDER_COLOR};
  }

  ${({ error }) =>
    error &&
    css`
      animation: ${shakeAnimation} 300ms ease-out;
    `}
`;
