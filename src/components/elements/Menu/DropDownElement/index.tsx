import React, { HTMLAttributes, useCallback, useState } from "react";
import {
  StyledMenuIcon,
  StyledMenuText,
} from "@/components/elements/Menu/styles";
import {
  MenuDropDownLinkType,
  menuIconColorsConfig,
} from "@/components/elements/Menu/config";
import Paragraph from "@/components/common/Paragraph";
import {
  StyledMenuRotate,
  StyledMenuRotateList,
  StyledMenuRotateWrapper,
} from "./styles";
import { IoIosArrowDown } from "react-icons/io";
import { FlexBlock } from "@/components/common/Block";
import { Colors } from "@/styles/colors";
import CustomButton from "@/components/common/Button";

interface MenuDropDownElementProps extends HTMLAttributes<HTMLDivElement> {
  isActive: boolean;
  isNeedRotateHeadElement?: boolean;
  headElement: MenuDropDownLinkType;
  renderLinks: () => JSX.Element[];
}

const MenuDropDownElement = ({
  isActive,
  isNeedRotateHeadElement,
  headElement,
  renderLinks,
}: MenuDropDownElementProps) => {
  const [isClicked, setIsClicked] = useState(false);
  const iconProps = isActive ? { color: menuIconColorsConfig.active } : {};

  const onClickHandler = useCallback(() => {
    setIsClicked((prev) => !prev);
  }, []);

  return (
    <StyledMenuRotateWrapper
      isNeedRotate={isNeedRotateHeadElement}
      isClicked={isClicked}
    >
      <StyledMenuRotateList
        id="rotate-menu-list"
        isActive={isActive}
        onClick={onClickHandler}
      >
        <StyledMenuIcon id="menu-icon">
          <CustomButton variant="transparent">
            {React.cloneElement(headElement.icon, iconProps)}
          </CustomButton>
        </StyledMenuIcon>

        <StyledMenuText id="menu-text">
          <FlexBlock
            justify="space-between"
            align="center"
            width="100%"
            padding="0 10px 0 0"
          >
            <Paragraph
              fontSize="16px"
              color={iconProps.color ?? menuIconColorsConfig.inactive}
              bold
            >
              {headElement.title}
            </Paragraph>
            {React.cloneElement(
              <IoIosArrowDown fontSize="20px" color={Colors.FONT_SIZE_GREY} />,
              iconProps
            )}
          </FlexBlock>
        </StyledMenuText>
      </StyledMenuRotateList>
      <StyledMenuRotate id="rotate-menu" onClick={onClickHandler}>
        {renderLinks()}
      </StyledMenuRotate>
    </StyledMenuRotateWrapper>
  );
};

export default MenuDropDownElement;
