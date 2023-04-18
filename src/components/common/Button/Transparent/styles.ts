import styled from "styled-components";

export const StyledTransparentButton = styled.button`
  display: inline-flex;
  height: unset;
  background-color: transparent;
  border-radius: 0;
  transition: 100ms;
  cursor: pointer;
  will-change: transform;

  &:hover {
    background-color: transparent;
  }

  &:disabled {
    cursor: default;

    &:active {
      transform: scale(1);
    }
  }

  &:active {
    transform: scale(0.9);
  }
`;
