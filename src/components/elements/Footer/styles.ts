import styled from "styled-components";

import { Colors } from "@/styles/colors";

export const StyledFooter = styled.footer`
  min-height: 350px;
  width: 100%;
  background-color: ${Colors.LIGHT_SELECTED};
`;

export const StyledFooterContentContainer = styled.div`
  display: flex;
  min-height: 350px;
  justify-content: space-between;
  gap: 32px;
  flex-wrap: wrap;
  padding: 48px 5% 0 5%;
`;
