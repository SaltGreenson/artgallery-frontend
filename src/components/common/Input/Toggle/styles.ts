import { Colors } from "@/styles/colors";
import styled from "styled-components";

type ElementContainerProps = {
  noBackground?: boolean;

  activeColor?: Colors.DARK_BLUE | string;
};

export const StyledElementContainer = styled.div<{
  isFlexAlign?: boolean;
  noPadding?: boolean;
}>`
  display: flex;
  justify-content: center;
  flex-direction: ${({ isFlexAlign }) => (isFlexAlign ? "row" : "column")};
  align-items: center;
  position: relative;
  border-radius: 10px;

  & > div,
  & > p {
    display: flex;
    justify-content: center;
    cursor: pointer;
    border-radius: 3px;
    padding: ${({ noPadding }) => (noPadding ? "unset" : "7px")};
  }

  & > div {
    display: inline-flex;
  }
`;

export const StyledToggleRadio = styled.input<ElementContainerProps>`
  position: absolute;
  z-index: 2;
  cursor: pointer;
  width: 300px;
  height: 300px;
  opacity: 0;

  &:checked ~ div {
    
    background-color: ${({ noBackground }) =>
      !noBackground && Colors.ACTIVE_LINK_BACKGROUND};
    
    svg {
      fill: ${Colors.DARK_BLUE};
    }
    
    p {
      color: ${({ activeColor = Colors.DARK_BLUE }) => activeColor}
    }
  }
}
`;

export const StyledToggleElementWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;
