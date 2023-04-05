import styled from "styled-components";
import { Colors } from "@/styles/colors";

export const HeartContainer = styled.button<{ inFavourites?: boolean }>`
  position: relative;
  cursor: pointer;
  background-color: transparent;
  outline: none;

  & > svg {
    transition: 200ms;
  }

  &:hover > svg {
    stroke: ${Colors.HOVER_DARK_BLUE};
  }
`;
