import React, { HTMLAttributes, useCallback, useState } from "react";
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
  StyledMenuRotate,
  StyledMenuRotateList,
  StyledMenuRotateWrapper,
} from "./styles";
import { IoIosArrowDown } from "react-icons/io";
import { FlexBlock } from "@/components/common/Block";
import { Colors } from "@/styles/colors";

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
  const [isActive, setIsActive] = useState(false);

  const iconProps =
    activeIdx >= 0 ? { color: menuIconColorsConfig.active } : {};

  const onClickHandler = useCallback(() => {
    setIsActive((prev) => !prev);
  }, []);

  return (
    <StyledMenuRotateWrapper
      isNeedRotate={isNeedRotateHeadElement}
      isActive={isActive}
    >
      <StyledMenuRotateList isActive={activeIdx >= 0} onClick={onClickHandler}>
        <StyledMenuIcon>
          {React.cloneElement(headElement.icon, iconProps)}
        </StyledMenuIcon>
        <StyledMenuText>
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
      <StyledMenuRotate onClick={onClickHandler}>
        {renderLinks()}
      </StyledMenuRotate>
    </StyledMenuRotateWrapper>
  );
};

export default MenuDropDownElement;
