import React, { ReactNode, useCallback } from "react";
import Footer from "../../elements/Footer";
import Menu from "@/components/elements/Menu";

import {
  ContentContainer,
  FooterContainer,
  MainLayoutContainer,
  MenuContainer,
} from "./styles";
import { useSelector } from "react-redux";
import { getAuthUser } from "@/selectors/userSelectors";
import useActions from "@/utils/hooks/useActions";

type PropsTypes = {
  children: ReactNode;
};
const MainLayout = ({ children }: PropsTypes): JSX.Element => {
  const authUser = useSelector(getAuthUser);
  const { logout } = useActions();

  const logOutHandler = useCallback(() => {
    logout();
  }, []);

  return (
    <MainLayoutContainer>
      <MenuContainer>
        <Menu authUser={authUser} logOutHandler={logOutHandler} />
      </MenuContainer>
      <ContentContainer>{children}</ContentContainer>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </MainLayoutContainer>
  );
};

export default MainLayout;
