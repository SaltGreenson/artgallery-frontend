import styled, { css } from "styled-components";
import { Colors } from "@/styles/colors";

export const StyledMenuIcon = styled.div`
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  min-height: 44px;
  transition: 200ms;
`;

export const StyledMenuText = styled.div`
  min-height: 44px;
  display: none;
  align-items: center;
  transition: 200ms;
  border-radius: 0 10px 10px 0;
  user-select: none;
  flex: 1;
  margin-right: 20px;
`;

export const StyledMenuLogoWrapper = styled.div`
  display: flex;
  width: 300px;
  padding-top: 1rem;
  padding-left: 5px;

  svg {
    transition: height 300ms, width 300ms;
  }
`;

export const MenuContainer = styled.div<{ isFullSizeView: boolean }>`
  width: 70px;
  position: fixed;
  left: 0;
  top: 0;
  min-height: 100vh;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.08);
  overflow-x: hidden;
  overflow-y: scroll;
  background-color: ${Colors.WHITE};
  transition: 400ms;

  ::-webkit-scrollbar {
    display: none;
  }

  ${({ isFullSizeView }) =>
    isFullSizeView &&
    css`
      width: 300px;

      ${StyledMenuLogoWrapper} svg {
        height: 90px;
        width: 91px;
      }

      ${StyledMenuText} {
        display: flex;
      }

      ${StyledMenuIcon} {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
    `}
`;

export const StyledMenu = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-left: 10px;
  padding-top: 1rem;
`;

export const StyledMenuList = styled.li<{ isActive?: boolean }>`
  width: 300px;
  display: flex;
  align-items: center;
  transition: background-color 200ms;
  cursor: pointer;

  ${StyledMenuIcon}, ${StyledMenuText} {
    background-color: ${({ isActive }) =>
      isActive ? Colors.PURPLE : Colors.WHITE};
  }

  &:hover {
    ${StyledMenuIcon}, ${StyledMenuText} {
      background-color: ${({ isActive }) =>
        isActive ? Colors.DARK_PURPLE : Colors.LIGHT_SELECTED};
    }
  }
`;

export const StyledMenuOpenCloseButtonContainer = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  transition: background-color 200ms;
  cursor: pointer;
  padding-left: 10px;
  padding-top: 10px;
`;

export const StyledMenuOpenCloseButton = styled(StyledMenuIcon)<{
  isOpen?: boolean;
}>`
  background-color: ${Colors.LIGHT_SELECTED};

  svg {
    transform: rotate(0deg);
    transition: rotate 300ms;

    @keyframes changeIcon {
      0% {
        transform: rotate(90deg);
        opacity: 0.75;
      }

      25% {
        transform: rotate(180deg);
        opacity: 0.5;
      }

      50% {
        transform: rotate(270deg);
        opacity: 0.75;
      }

      100% {
        transform: rotate(360deg);
        opacity: 1;
      }
    }

    ${({ isOpen }) =>
      isOpen &&
      css`
        animation: linear changeIcon 300ms;

        ${StyledMenuOpenCloseButtonText} {
          display: flex;
        }
      `}
  }
`;

export const StyledMenuOpenCloseButtonText = styled(StyledMenuText)`
  display: none;
  margin-right: 10px;
  background-color: ${Colors.LIGHT_SELECTED};
`;

export const StyledMenuOwnerInfo = styled(StyledMenuText)`
  padding: 10px;
  flex-direction: column;
  align-items: flex-start;
  gap: 13px;
`;
