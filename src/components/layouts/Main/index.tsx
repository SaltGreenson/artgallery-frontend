import React, { ReactNode, useEffect, useState } from "react";
import Footer from "../../elements/Footer";

import {
  ContentContainer,
  FooterContainer,
  HeaderContainer,
  MainLayoutContainer,
} from "./styles";

type PropsTypes = {
  children: ReactNode;
};
const Index = ({ children }: PropsTypes): JSX.Element => {
  const [prevScrollPos, setPrevScrollPos] = useState(
    typeof window !== "undefined" ? window.scrollY : 0
  );
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <>
      <MainLayoutContainer>
        <HeaderContainer visible={visible}>{/*<Header />*/}</HeaderContainer>
        <ContentContainer>{children}</ContentContainer>
        <FooterContainer>
          <Footer />
        </FooterContainer>
      </MainLayoutContainer>
    </>
  );
};

export default Index;
