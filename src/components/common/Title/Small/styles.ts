import styled from "styled-components";

import { Colors } from "@/styles/colors";
import { IStyledTitleProps } from "../Large/styles";

export const StyledSmallTitle = styled.h4<IStyledTitleProps>`
  font-family: "Gotham Pro Bold", serif;
  font-size: ${({ fontSize = "16px" }) => fontSize};
  color: ${({ color = Colors.BLACK }) => color};
`;
