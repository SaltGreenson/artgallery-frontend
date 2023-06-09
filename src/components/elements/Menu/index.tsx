import React, { HTMLAttributes, useCallback, useState } from "react";

import { IoSettingsOutline } from "react-icons/io5";
import Paragraph from "@/components/common/Paragraph";
import MenuDropDownElement from "@/components/elements/Menu/DropDownElement";
import { CustomBlock, FlexBlock } from "@/components/common/Block";
import CustomLink from "@/components/common/Link";
import {
  displayStyleIconConfig,
  DisplayStyleText,
  iconLogInLogOutUserConfig,
  menuIconColorsConfig,
  menuLinksConfig,
  MenuLinkType,
  menuSettingLinksConfig,
} from "@/components/elements/Menu/config";

import {
  MenuContainer,
  StyledMenu,
  StyledMenuIcon,
  StyledMenuList,
  StyledMenuLogoWrapper,
  StyledMenuOpenCloseButton,
  StyledMenuOpenCloseButtonContainer,
  StyledMenuOpenCloseButtonText,
  StyledMenuOwnerInfo,
  StyledMenuText,
} from "@/components/elements/Menu/styles";
import { Colors } from "@/styles/colors";
import CustomButton from "@/components/common/Button";
import { useRouter } from "next/router";
import { isEqualHelper } from "@/utils/helpers/isEqual.helper";
import { IAuthUser } from "@/models/IUser";
import { numberPrettier } from "@/utils/helpers/formatters.helper";
import UserIcon from "@/components/common/UserIcon";

interface MenuProps extends HTMLAttributes<HTMLDivElement> {
  authUser: IAuthUser | null;
  postsCount: number;
  likedCount: number;
  logOutHandler: () => void;
}

const Menu = ({
  authUser,
  postsCount,
  likedCount,
  logOutHandler,
  ...props
}: MenuProps): JSX.Element => {
  const [isFullSizeView, setIsFullSizeView] = useState(false);
  const router = useRouter();

  const handleClickDisplayStyle = useCallback(() => {
    setIsFullSizeView((prev) => !prev);
  }, []);

  const renderLink = useCallback(
    (
      idx: number,
      linkElement: MenuLinkType,
      fontSize: string,
      isActive: boolean,
      onClick?: () => void
    ) => {
      const iconProps = isActive ? { color: menuIconColorsConfig.active } : {};
      const { icon, title, href } = linkElement;
      return (
        <CustomLink key={idx} href={href}>
          <StyledMenuList isActive={isActive} onClick={onClick}>
            <StyledMenuIcon id="menu-icon">
              <CustomButton variant="transparent">
                {React.cloneElement(icon, iconProps)}
              </CustomButton>
            </StyledMenuIcon>

            <StyledMenuText id="menu-text">
              <Paragraph
                fontSize={fontSize}
                color={
                  isActive
                    ? menuIconColorsConfig.active
                    : menuIconColorsConfig.inactive
                }
                bold
              >
                {title}
              </Paragraph>
            </StyledMenuText>
          </StyledMenuList>
        </CustomLink>
      );
    },
    []
  );

  const renderMainLinks = useCallback(
    () =>
      menuLinksConfig(!!authUser).map((link, idx) =>
        renderLink(idx, link, "16px", isEqualHelper(router.pathname, link.href))
      ),
    [router.pathname, renderLink, authUser]
  );

  const renderSubLinks = useCallback(
    (elements: MenuLinkType[]) => () =>
      elements.map((link, idx) =>
        renderLink(idx, link, "15px", isEqualHelper(router.pathname, link.href))
      ),

    [router.pathname, renderLink]
  );

  const displayMainLinks = renderMainLinks();

  return (
    <MenuContainer isFullSizeView={isFullSizeView} {...props}>
      <FlexBlock direction="column" justify="space-between" flex={1}>
        <CustomBlock>
          <StyledMenuOpenCloseButtonContainer onClick={handleClickDisplayStyle}>
            <StyledMenuOpenCloseButton id="menu-icon" isOpen={isFullSizeView}>
              <CustomButton variant="transparent">
                {displayStyleIconConfig(isFullSizeView)}
              </CustomButton>
            </StyledMenuOpenCloseButton>

            <StyledMenuOpenCloseButtonText id="menu-text">
              <Paragraph fontSize="16px" color={Colors.PURPLE} bold>
                {DisplayStyleText.FULL}
              </Paragraph>
            </StyledMenuOpenCloseButtonText>
          </StyledMenuOpenCloseButtonContainer>
          {authUser && (
            <StyledMenuLogoWrapper id="logo-wrapper">
              <CustomLink href="/own-arts">
                <UserIcon name={authUser.name} isActive={isFullSizeView} />
              </CustomLink>
              <StyledMenuOwnerInfo id="menu-text">
                <CustomLink href="/own-arts" fontSize="16px" bold>
                  {authUser.name}
                </CustomLink>
                <CustomLink
                  href="/own-arts"
                  color={Colors.NEW_ORANGE}
                  hoverColor={Colors.NEW_ORANGE}
                  fontSize="16px"
                  bold
                >
                  Likes: {numberPrettier(likedCount)}
                </CustomLink>
                <CustomLink
                  href="/own-arts"
                  color={Colors.NEW_ORANGE}
                  hoverColor={Colors.NEW_ORANGE}
                  fontSize="16px"
                  bold
                >
                  Posts: {numberPrettier(postsCount)}
                </CustomLink>
              </StyledMenuOwnerInfo>
            </StyledMenuLogoWrapper>
          )}
          <StyledMenu>
            {displayMainLinks}
            {authUser && (
              <MenuDropDownElement
                isActive={menuSettingLinksConfig.some(
                  (link) => link.href === router.pathname
                )}
                isNeedRotateHeadElement
                headElement={{
                  title: "Settings",
                  icon: (
                    <IoSettingsOutline
                      fontSize="30px"
                      color={menuIconColorsConfig.inactive}
                    />
                  ),
                }}
                renderLinks={renderSubLinks(menuSettingLinksConfig)}
              />
            )}
          </StyledMenu>
        </CustomBlock>

        <CustomBlock
          padding="0 0 20px 10px"
          onClick={() => !!authUser && logOutHandler()}
        >
          {renderLink(-2, iconLogInLogOutUserConfig(!!authUser), "16px", false)}
        </CustomBlock>
      </FlexBlock>
    </MenuContainer>
  );
};

export default Menu;
