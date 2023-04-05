import React, { useCallback, useState } from "react";

import Paragraph from "@/components/common/Paragraph";
import Logo from "@/components/common/Sign/Logo";
import DressIcon from "@/components/common/Sign/Dress";
import MenuDropDownElement from "@/components/elements/Menu/DropDownElement";
import { IoSettingsOutline } from "react-icons/io5";

import {
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
  StyledMenuText,
} from "@/components/elements/Menu/styles";

const Menu = () => {
  const [activeMainIdx, setActiveMainIdx] = useState(0);
  const [activeSettingsIdx, setActiveSettingsIdx] = useState(-1);

  const handleClick = useCallback(
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
      onClick: () => void
    ) => {
      const iconProps = isActive ? { color: menuIconColorsConfig.active } : {};
      const { icon, title } = linkElement;
      return (
        <StyledMenuList key={idx} isActive={isActive} onClick={onClick}>
          <StyledMenuIcon>{React.cloneElement(icon, iconProps)}</StyledMenuIcon>
          <StyledMenuText>
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
      );
    },
    []
  );

  const renderMainLinks = useCallback(
    () =>
      menuLinksConfig.map((link, idx) =>
        renderLink(
          idx,
          link,
          "16px",
          idx === activeMainIdx,
          handleClick({ mainIdx: idx })
        )
      ),
    [activeMainIdx, handleClick, renderLink]
  );

  const renderSubLinks = useCallback(
    (elements: MenuLinkType[]) => () =>
      elements.map((link, idx) =>
        renderLink(
          idx,
          link,
          "15px",
          idx === activeSettingsIdx,
          handleClick({ settingsIdx: idx })
        )
      ),
    [activeSettingsIdx, handleClick, renderLink]
  );

  const displayMainLinks = renderMainLinks();

  return (
    <MenuContainer>
      <StyledMenuLogoWrapper>
        <Logo />
      </StyledMenuLogoWrapper>
      <StyledMenu>
        {displayMainLinks}
        <MenuDropDownElement
          activeIdx={activeSettingsIdx}
          isNeedRotateHeadElement
          headElement={{
            title: "Настройки",
            icon: (
              <IoSettingsOutline
                fontSize="30px"
                color={menuIconColorsConfig.inactive}
              />
            ),
          }}
          renderLinks={renderSubLinks(menuSettingLinksConfig)}
        />
        <MenuDropDownElement
          activeIdx={activeSettingsIdx}
          headElement={{
            title: "Женские вещи",
            icon: (
              <DressIcon
                fontSize="30px"
                color={menuIconColorsConfig.inactive}
              />
            ),
          }}
          renderLinks={renderSubLinks(menuSettingLinksConfig)}
        />
      </StyledMenu>
    </MenuContainer>
  );
};

export default Menu;
