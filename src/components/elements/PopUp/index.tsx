import React, { ReactNode, useEffect } from "react";

import { StyledPopUp, StyledPopUpContent } from "./styles";

type PropsTypes = {
  children: ReactNode;
  setActive: (value: boolean) => void;
};

const Index = ({ children, setActive }: PropsTypes): JSX.Element => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleOnClick = () => {
    setActive(false);
  };

  return (
    <StyledPopUp onClick={handleOnClick}>
      <StyledPopUpContent onClick={(e) => e.stopPropagation()}>
        {children}
      </StyledPopUpContent>
    </StyledPopUp>
  );
};

export default Index;
