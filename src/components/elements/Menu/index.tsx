import React, { HTMLAttributes, useCallback, useState } from "react";

import { IoSettingsOutline } from "react-icons/io5";
import Paragraph from "@/components/common/Paragraph";
import Logo from "@/components/common/Sign/Logo";
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
import { isEqual } from "@/utils/helpers/isEqual";

interface MenuProps extends HTMLAttributes<HTMLDivElement> {
  isAuthUser?: boolean;
}

const Menu = ({ isAuthUser, ...props }: MenuProps): JSX.Element => {
  isAuthUser = true;
  const [activeMainIdx, setActiveMainIdx] = useState(0);
  const [activeSettingsIdx, setActiveSettingsIdx] = useState(-1);
  const [isFullSizeView, setIsFullSizeView] = useState(false);
  const router = useRouter();

  const handleClickDisplayStyle = useCallback(() => {
    setIsFullSizeView((prev) => !prev);
  }, []);

  const handleClickActiveIdx = useCallback(
    ({ mainIdx, settingsIdx }: { mainIdx?: number; settingsIdx?: number }) =>
      () => {
        setActiveMainIdx(mainIdx ?? -1);
        setActiveSettingsIdx(settingsIdx ?? -1);
      },
    []
  );

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
              <CustomButton variant="icon">
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
      menuLinksConfig(isAuthUser).map((link, idx) =>
        renderLink(
          idx,
          link,
          "16px",
          isEqual(router.pathname, link.href),
          handleClickActiveIdx({ mainIdx: idx })
        )
      ),
    [activeMainIdx, handleClickActiveIdx, renderLink]
  );

  const renderSubLinks = useCallback(
    (elements: MenuLinkType[]) => () =>
      elements.map((link, idx) =>
        renderLink(
          idx,
          link,
          "15px",
          isEqual(router.pathname, link.href),
          handleClickActiveIdx({ settingsIdx: idx })
        )
      ),
    [activeSettingsIdx, handleClickActiveIdx, renderLink]
  );

  const displayMainLinks = renderMainLinks();

  return (
    <MenuContainer isFullSizeView={isFullSizeView} {...props}>
      <FlexBlock direction="column" justify="space-between" flex={1}>
        <CustomBlock>
          <StyledMenuOpenCloseButtonContainer onClick={handleClickDisplayStyle}>
            <StyledMenuOpenCloseButton id="menu-icon" isOpen={isFullSizeView}>
              <CustomButton variant="icon">
                {displayStyleIconConfig(isFullSizeView)}
              </CustomButton>
            </StyledMenuOpenCloseButton>

            <StyledMenuOpenCloseButtonText id="menu-text">
              <Paragraph fontSize="16px" color={Colors.PURPLE} bold>
                {DisplayStyleText.FULL}
              </Paragraph>
            </StyledMenuOpenCloseButtonText>
          </StyledMenuOpenCloseButtonContainer>
          {isAuthUser && (
            <StyledMenuLogoWrapper id="logo-wrapper">
              <CustomLink href="#">
                <Logo />
              </CustomLink>
              <StyledMenuOwnerInfo id="menu-text">
                <CustomLink href="#" fontSize="16px" bold>
                  Vlad Yuskovich
                </CustomLink>
                <CustomLink
                  href="#"
                  color={Colors.NEW_ORANGE}
                  hoverColor={Colors.NEW_ORANGE}
                  fontSize="16px"
                  bold
                >
                  Likes: 999+
                </CustomLink>
                <CustomLink
                  href="#"
                  color={Colors.NEW_ORANGE}
                  hoverColor={Colors.NEW_ORANGE}
                  fontSize="16px"
                  bold
                >
                  Posts: 999+
                </CustomLink>
              </StyledMenuOwnerInfo>
            </StyledMenuLogoWrapper>
          )}
          <StyledMenu>
            {displayMainLinks}
            {isAuthUser && (
              <MenuDropDownElement
                activeIdx={activeSettingsIdx}
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

        <CustomBlock padding="0 0 20px 10px">
          {renderLink(-2, iconLogInLogOutUserConfig(isAuthUser), "16px", false)}
        </CustomBlock>
      </FlexBlock>
    </MenuContainer>
  );
};

export default Menu;
