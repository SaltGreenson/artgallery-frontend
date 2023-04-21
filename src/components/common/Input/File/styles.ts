import styled from "styled-components";
import { Colors } from "@/styles/colors";

export const StyledInputDropFileContainer = styled.div<{ disabled?: boolean }>`
  width: clamp(250px, 100vw / 3, 500px);
  height: clamp(100px, 100vh / 4, 300px);
  display: flex;
  align-items: center;
  gap: 2%;
  padding: 2%;
  border: 4px dashed ${Colors.PURPLE};
  border-radius: 23px;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
`;

export const StyledInputDropFileIcon = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  border-radius: 10px;
  border: 2px dotted ${Colors.NEW_PINK};
`;

export const StyledInputDropFileSelectedImageContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 10px;
  display: flex;
  justify-content: center;

  & > image {
    object-fit: cover;
  }
`;

export const StyledInputFileContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  & > label {
    min-width: unset;
  }

  & input {
    left: 0;
    top: 0;
    right: unset;
    bottom: unset;
    width: 100%;
    height: 100%;
  }
`;
