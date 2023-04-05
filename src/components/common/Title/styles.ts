import styled from "styled-components";

import { Colors } from "@/styles/colors";

export interface IStyledTitleProps {
  color?: string;
  fontSize?: string;
}

export const StyledLarge = styled.h2<IStyledTitleProps>`
  font-family: "Gotham Pro Bold", serif;
  font-size: ${({ fontSize = "29px" }) => fontSize};
  color: ${({ color = Colors.BLACK }) => color};
`;

export const StyledMedium = styled.h3<IStyledTitleProps>`
  font-family: "Gotham Pro Bold", serif;
  font-size: ${({ fontSize = "24px" }) => fontSize};
  color: ${({ color = Colors.BLACK }) => color};
`;

export const StyledSmall = styled.h4<IStyledTitleProps>`
  font-family: "Gotham Pro Bold", serif;
  font-size: ${({ fontSize = "16px" }) => fontSize};
  color: ${({ color = Colors.BLACK }) => color};
`;

export const StyledSmallThin = styled(StyledSmall)`
  padding-top: 2px;
  font-family: "Gotham Pro Medium", serif;
  font-weight: 500;
  color: ${Colors.BLACK};
`;
