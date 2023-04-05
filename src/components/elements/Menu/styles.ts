import styled from "styled-components";
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
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 1rem;

  svg {
    transition: height 400ms;
  }
`;

export const MenuContainer = styled.div`
  width: 70px;
  position: fixed;
  left: 0;
  top: 0;
  min-height: 100vh;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  background-color: ${Colors.WHITE};
  transition: 400ms;

  &:hover {
    width: 300px;

    ${StyledMenuLogoWrapper} svg {
      height: 171px;
    }

    ${StyledMenuText} {
      display: flex;
    }

    ${StyledMenuIcon} {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
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
