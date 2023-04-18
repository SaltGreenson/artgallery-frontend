import styled from "styled-components";
import { Colors } from "@/styles/colors";

export const StyledCardContainer = styled.div`
  width: clamp(300px, 100vw / 1.5, 800px);
  height: clamp(300px, 100vh / 2 - 20px, 524px);
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
  transition-delay: 300ms;
  transition: linear 200ms;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.08);

  @media (min-width: 768px) {
    &:hover {
      max-width: 50%;
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
  transition: transform 600ms;
  will-change: transform;

  @media (min-width: 768px) {
    &:hover {
      transform: scale(1.05);
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const StyledCardContentContainer = styled.div`
  width: 100%;
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
`;
