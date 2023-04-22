import styled from "styled-components";
import { Colors } from "@/styles/colors";

export interface IStyledTitleProps {
  color?: string;
  fontSize?: string;
}

export const StyledLargeTitle = styled.h1<IStyledTitleProps>`
  font-family: "Gotham Pro Bold", serif;
  font-size: ${({ fontSize = "32px" }) => fontSize};
  color: ${({ color = Colors.BLACK }) => color};
`;
