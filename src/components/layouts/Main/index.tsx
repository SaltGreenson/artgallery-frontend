import React, { ReactNode, useCallback } from "react";
import Footer from "../../elements/Footer";
import Menu from "@/components/elements/Menu";

import {
  ContentContainer,
  FooterContainer,
  MainLayoutContainer,
  MenuContainer,
} from "./styles";
import useActions from "@/utils/hooks/useActions";
import { useSelector } from "react-redux";
import {
  getAuthUser,
  getLikedCount,
  getPostsCount,
} from "@/selectors/userSelectors";

type PropsTypes = {
  children: ReactNode;
};
const MainLayout = ({ children }: PropsTypes): JSX.Element => {
  const { logout } = useActions();
  const authUser = useSelector(getAuthUser);
  const postsCount = useSelector(getPostsCount);
  const likedCount = useSelector(getLikedCount);
  const logOutHandler = useCallback(() => {
    logout();
  }, []);

  return (
    <MainLayoutContainer>
      <MenuContainer>
        <Menu
          authUser={authUser}
          postsCount={postsCount}
          likedCount={likedCount}
          logOutHandler={logOutHandler}
        />
      </MenuContainer>
      <ContentContainer>{children}</ContentContainer>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </MainLayoutContainer>
  );
};

export default MainLayout;
