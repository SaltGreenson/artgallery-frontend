import styled from "styled-components";

export const StyledGalleryFormContainer = styled.div`
  width: 100%;
  flex: 1;

  @media (min-width: 768px) {
    width: clamp(300px, 100vw / 1.5, 800px);
  }
`;
