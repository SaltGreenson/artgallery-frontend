import React, { ReactNode } from "react";
import Footer from "../../elements/Footer";
import Menu from "@/components/elements/Menu";

import {
  ContentContainer,
  FooterContainer,
  MainLayoutContainer,
  MenuContainer,
} from "./styles";

type PropsTypes = {
  children: ReactNode;
};
const MainLayout = ({ children }: PropsTypes): JSX.Element => (
  <MainLayoutContainer>
    <MenuContainer>
      <Menu />
    </MenuContainer>
    <ContentContainer>{children}</ContentContainer>
    <FooterContainer>
      <Footer />
    </FooterContainer>
  </MainLayoutContainer>
);

export default MainLayout;
