import styled from "styled-components";

export const CatalogViewContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 2rem;

  @media (max-width: 768px) {
    padding: 2rem 3% 0 3%;
  }
`;

export const CatalogViewTitleContainer = styled.div`
  padding-bottom: 3rem;
  width: 100%;
  flex: 1;
  @media (min-width: 1024px) {
    width: clamp(300px, 100vw / 1.5, 800px);
  }
`;
