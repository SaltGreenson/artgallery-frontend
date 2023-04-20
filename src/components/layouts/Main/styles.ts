import styled from "styled-components";

export const MainLayoutContainer = styled.div<{ visible?: boolean }>`
  display: grid;
  grid-template-rows: auto 100px max-content;
  grid-template-columns: max-content auto;
  min-height: 100vh;
  max-width: 100vw;

  @media (max-width: 768px) {
    grid-template-rows: auto 100px max-content;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 70px calc(100% - 73px) 3px;
  }
`;
export const ContentContainer = styled.div`
  grid-row: 1;
  grid-column: 2;
`;

export const MenuContainer = styled.div<{ visible?: boolean }>`
  grid-row: 1 / span 3;
  grid-column: 1;
  max-height: 100vh;

  @media (min-width: 1024px) {
    position: sticky;
    top: 0;
  }
`;

export const FooterContainer = styled.div`
  grid-row: 3;
  grid-column: 2;

  @media (max-width: 1024px) {
    grid-column: 2 / span 3;
  }
`;
