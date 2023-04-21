import styled, { css } from "styled-components";
import { Colors } from "@/styles/colors";
import { shakeAnimation } from "@/styles/keyframes";

type StyledSmallSearchType = {
  error?: string;
  textIsPresent?: boolean;
};

export const StyledSmallSearchInput = styled.input<StyledSmallSearchType>`
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
  color: ${Colors.INPUT_FONT_COLOR};
  background: transparent url(/Icons/searchIcon.svg) no-repeat 7px 5px;
  transition: width 400ms, background-position 400ms, border 300ms;
  outline: none;

  &:focus {
    width: 200px;
    cursor: text;
    border: 1px solid ${Colors.GREY};
  }

  ${({ textIsPresent }) =>
    textIsPresent &&
    css`
      width: 200px;
      cursor: text;
      border: 1px solid ${Colors.GREY};
    `}

  ${({ error }) =>
    error &&
    css`
      animation: ${shakeAnimation} 300ms ease-out;
      border: 1px solid ${Colors.RED};
    `}
`;
