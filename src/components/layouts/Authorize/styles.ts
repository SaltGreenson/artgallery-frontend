import styled from "styled-components";

export const Layout = styled.div`
  min-height: 100vh;
  min-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    padding: 0 2%;
  }
`;

export const Content = styled.div`
  width: 40%;

  @media (max-width: 768px) {
    width: 96%;
  }
`;
