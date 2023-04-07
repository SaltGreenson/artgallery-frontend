import styled from "styled-components";

export const CatalogViewContainer = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 2rem;

  @media (max-width: 768px) {
    padding: 2rem 3% 0 3%;
  }
`;

export const CatalogViewTitleContainer = styled.div`
  padding-bottom: 3rem;
`;
