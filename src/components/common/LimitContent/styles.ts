import styled from "styled-components";

type LimitContentProps = {
  maxWidth?: "1600px" | "1120px" | "750px" | string;
  notCentered?: boolean;
};

export const LimitContent = styled.div<LimitContentProps>`
  max-width: ${({ maxWidth = "1600px" }) => maxWidth};
  height: 100%;
  margin: ${({ notCentered }) => (notCentered ? "unset" : "0 auto")};
  position: relative;
`;
