import styled, { keyframes } from "styled-components";

const loadingAnimation = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(100%);
  }
`;

export const SkeletonLoader = styled.div<{ isLightTheme?: boolean }>`
  position: absolute;
  left: 0;
  top: 0;
  width: clamp(300px, 100vw / 1.5, 800px);
  height: clamp(300px, 100vh / 2 - 20px, 524px);
  background-image: ${({ isLightTheme }) =>
    isLightTheme
      ? "linear-gradient(to right, #f2f2f2, #e4e4e4, #f2f2f2)"
      : "linear-gradient(to right, #cecece, #c0bfbf, #cecece)"};
  background-repeat: no-repeat;
  animation: ${loadingAnimation} 1s infinite linear;
`;

export const StyledSkeletonCard = styled.div`
  min-width: clamp(300px, 100vw / 1.5, 800px);
  min-height: clamp(300px, 100vh / 2 - 20px, 524px);
  position: relative;
  display: flex;
  flex: 1;
  border-radius: 28px;
  overflow: hidden;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.08);
  background-color: #f2f2f2;

  @media (max-width: 768px) {
    width: 100%;
    height: 350px;
    flex-direction: column;
  }
`;

export const StyledSkeletonCardImage = styled.div`
  width: 40%;
  overflow: hidden;
  position: relative;
  background-color: #cecece;

  @media (max-width: 768px) {
    width: 100%;
    height: 250px;
  }
`;

export const StyledSkeletonCardContentContainer = styled.div`
  display: flex;
  position: relative;
  width: 60%;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  padding: 5px 3%;
`;

export const StyledSkeletonCardText = styled.div<{ width: string }>`
  width: ${({ width }) => width};
  height: 20px;
  background-color: #cecece;
  overflow: hidden;
  position: relative;
`;
