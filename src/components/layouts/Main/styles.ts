import styled from "styled-components";

export const MainLayoutContainer = styled.div<{ visible?: boolean }>`
  display: grid;
  grid-template-rows: 60px auto 100px 350px;
  grid-template-columns: 100%;
  min-height: 100vh;

  @media (max-width: 768px) {
    grid-template-rows: 60px auto 100px auto;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 3px calc(100% - 6px) 3px;
  }
`;
export const ContentContainer = styled.div`
  grid-row: 2;

  @media (max-width: 1024px) {
    grid-column: 2;
  }
`;

export const HeaderContainer = styled.div<{ visible?: boolean }>`
  z-index: 101;
  width: 100%;
  position: fixed;
  top: ${({ visible }) => (visible ? 0 : "-60px")};
  transition: top 200ms;

  @media (max-width: 1024px) {
    grid-column: 1 / span 3;
  }
`;

export const FooterContainer = styled.div`
  grid-row: 4;

  @media (max-width: 1024px) {
    grid-column: 1 / span 3;
  }
`;

export const MobileMenuContainer = styled.div`
  display: none;

  @media (max-width: 1024px) {
    display: block;
  }
`;
