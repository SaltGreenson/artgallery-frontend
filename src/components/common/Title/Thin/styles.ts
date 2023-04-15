import styled from "styled-components";

import { Colors } from "@/styles/colors";
import { StyledSmallTitle } from "@/components/common/Title/Small/styles";

export const StyledThinTitle = styled(StyledSmallTitle)`
  padding-top: 2px;
  font-family: "Gotham Pro Medium", serif;
  font-weight: 500;
  color: ${Colors.BLACK};
`;
