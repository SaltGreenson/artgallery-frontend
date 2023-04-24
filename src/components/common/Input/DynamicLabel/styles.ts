import styled, { css } from "styled-components";
import { Colors } from "@/styles/colors";

type LeftPositionProps = {
  leftPosition: string;
};

export const StyledInputWDLInput = styled.input<
  { error?: string } & LeftPositionProps
>`
  width: 100%;
  height: 35px;
  border-width: 0;
  padding-top: 13px;
  padding-bottom: 3px;
  border-bottom: 2px solid
    ${({ error }) => (error ? Colors.RED : Colors.NEW_PINK)};
  font-size: 15px;
  line-height: 18px;
  font-family: "Gotham Pro", serif;
  transition: 150ms cubic-bezier(0, 0, 0, 1);
  outline: none;
  color: ${Colors.PURPLE};

  &::placeholder {
    color: transparent;
  }

  &:focus {
    border-bottom: 2px solid ${Colors.PURPLE};
  }

  &:focus ~ label {
    transform: translateY(-50%) scale(0.8);
    left: ${({ leftPosition }) => leftPosition};
    color: ${Colors.PURPLE};
  }
`;

export const StyledInputWDLabel = styled.label<
  { text?: string } & LeftPositionProps
>`
  position: absolute;
  left: 0;
  font-size: 14px;
  font-family: "Gotham Pro", serif;
  color: ${Colors.NEW_PINK};
  pointer-events: none;
  transition: 150ms cubic-bezier(0, 0, 0, 1);
  transform: translateY(13px);

  ${({ text, leftPosition }) =>
    text &&
    css`
      left: ${leftPosition};
      transform: translateY(-50%) scale(0.8);
      color: ${Colors.NEW_PINK};
    `}
`;
