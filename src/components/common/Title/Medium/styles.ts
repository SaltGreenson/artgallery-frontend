import styled from "styled-components";
import { Colors } from "@/styles/colors";
import { IStyledTitleProps } from "../Large/styles";

export const StyledMediumTitle = styled.h2<IStyledTitleProps>`
  font-family: "Gotham Pro Bold", serif;
  font-size: ${({ fontSize = "29px" }) => fontSize};
  color: ${({ color = Colors.BLACK }) => color};
`;
