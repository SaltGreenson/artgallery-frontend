import styled from "styled-components";

export const Layout = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    padding: 0 2%;
  }
`;

export const Content = styled.div`
  width: 40%;
  padding-top: 3rem;
  @media (max-width: 768px) {
    width: 96%;
  }
`;
