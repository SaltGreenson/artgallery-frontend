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
import { getLikedCount, getPostsCount } from "@/selectors/userSelectors";
import { IAuthUser } from "@/models/IUser";

type PropsTypes = {
  authUser: IAuthUser | null;
  children: ReactNode;
};
const MainLayout = ({ authUser, children }: PropsTypes): JSX.Element => {
  const { logout } = useActions();
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
