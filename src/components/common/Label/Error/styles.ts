import styled from "styled-components";

import { Colors } from "@/styles/colors";

export const StyledErrorLabel = styled.label<{
  fontSize?: "12px" | "14px" | "16px" | string;
}>`
  display: block;
  font-size: ${({ fontSize = "14px" }) => fontSize};
  color: ${Colors.RED};
  line-height: 15px;
`;
