import styled, { css } from "styled-components";
import { StyledMenuList } from "@/components/elements/Menu/styles";

type StyledMenuRotateProps = {
  isNeedRotate?: boolean;
  isClicked?: boolean;
};

export const StyledMenuRotateList = styled(StyledMenuList)`
  svg {
    transition: 300ms transform;
    transform: rotate(0);
  }
`;

export const StyledMenuRotate = styled.div`
  max-height: 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
  transition: 400ms max-height;
  overflow: hidden;
`;

export const StyledMenuRotateWrapper = styled.div<StyledMenuRotateProps>`
  display: flex;
  flex-direction: column;
  gap: 10px;

  ${({ isClicked }) =>
    isClicked &&
    css`
      #rotate-menu {
        max-height: 140px;
      }
    `}

  ${({ isNeedRotate, isClicked }) =>
    isNeedRotate &&
    isClicked &&
    css`
      #rotate-menu-list {
        svg {
          transform: rotate(180deg);
        }
      }
    `}
`;
