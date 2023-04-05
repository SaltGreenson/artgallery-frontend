import React, { HTMLAttributes } from "react";
import {
  StyledMenuIcon,
  StyledMenuText,
} from "@/components/elements/Menu/styles";
import {
  menuIconColorsConfig,
  MenuLinkType,
} from "@/components/elements/Menu/config";
import Paragraph from "@/components/common/Paragraph";
import {
  StyledMenuRotateList,
  StyledMenuSettings,
  StyledMenuSettingsWrapper,
} from "./styles";

interface MenuDropDownElementProps extends HTMLAttributes<HTMLDivElement> {
  activeIdx: number;
  isNeedRotateHeadElement?: boolean;
  headElement: MenuLinkType;
  renderLinks: () => JSX.Element[];
}

const MenuDropDownElement = ({
  activeIdx,
  isNeedRotateHeadElement,
  headElement,
  renderLinks,
}: MenuDropDownElementProps) => {
  const iconProps =
    activeIdx >= 0 ? { color: menuIconColorsConfig.active } : {};

  return (
    <StyledMenuSettingsWrapper isNeedRotate={isNeedRotateHeadElement}>
      <StyledMenuRotateList isActive={activeIdx >= 0}>
        <StyledMenuIcon>
          {React.cloneElement(headElement.icon, iconProps)}
        </StyledMenuIcon>
        <StyledMenuText>
          <Paragraph
            fontSize="16px"
            color={iconProps.color ?? menuIconColorsConfig.inactive}
            bold
          >
            {headElement.title}
          </Paragraph>
        </StyledMenuText>
      </StyledMenuRotateList>
      <StyledMenuSettings>{renderLinks()}</StyledMenuSettings>
    </StyledMenuSettingsWrapper>
  );
};

export default MenuDropDownElement;
