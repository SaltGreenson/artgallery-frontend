import styled, { css } from "styled-components";
import { StyledMenuList } from "@/components/elements/Menu/styles";

type StyledMenuRotateProps = {
  isNeedRotate?: boolean;
  isActive?: boolean;
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

  ${({ isActive }) =>
    isActive &&
    css`
      ${StyledMenuRotate} {
        max-height: 140px;
      }
    `}

  ${({ isNeedRotate, isActive }) =>
    isNeedRotate &&
    isActive &&
    css`
      ${StyledMenuRotateList} {
        svg {
          transform: rotate(180deg);
        }
      }
    `}
`;
