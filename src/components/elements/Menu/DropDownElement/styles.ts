import styled, { css } from "styled-components";
import { StyledMenuList } from "@/components/elements/Menu/styles";

export const StyledMenuRotateList = styled(StyledMenuList)`
  svg {
    transition: 300ms transform;
    transform: rotate(0);
  }
`;

export const StyledMenuSettings = styled.div`
  max-height: 0;
  transition: 400ms max-height, 200ms padding-top;
  overflow: hidden;
`;

export const StyledMenuSettingsWrapper = styled.div<{ isNeedRotate?: boolean }>`
  display: flex;
  flex-direction: column;

  &:hover > ${StyledMenuSettings} {
    max-height: 500px;
    padding-top: 10px;
  }

  ${({ isNeedRotate }) =>
    isNeedRotate &&
    css`
      &:hover > ${StyledMenuRotateList} {
        svg {
          transform: rotate(180deg);
        }
      }
    `}
`;
