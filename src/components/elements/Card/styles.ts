import styled from "styled-components";
import { Colors } from "@/styles/colors";

export const StyledCardContainer = styled.div`
  width: 800px;
  height: 524px;
  display: flex;
  position: relative;
  transition: box-shadow 300ms;
  border-radius: 28px;
  overflow: hidden;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.08);

  @media (min-width: 1024px) {
    &:hover {
      box-shadow: 0 0 8px ${Colors.ICE};
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    flex-direction: column;
  }
`;

export const StyledCardImageContainer = styled.div`
  max-width: 40%;
  overflow: clip;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: linear 300ms;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.08);

  @media (min-width: 1024px) {
    &:hover {
      max-width: 80%;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: unset;
    max-height: 400px;
  }
`;

export const StyledCardImage = styled.img`
  height: 100%;
  object-fit: contain;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const StyledCardContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  padding: 5px 3%;
`;

export const StyledCardTextContainer = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;

  h2 {
    word-wrap: break-word;
  }
`;

export const StyledCardIconContainer = styled.div`
  display: inline-flex;
  cursor: pointer;
`;
