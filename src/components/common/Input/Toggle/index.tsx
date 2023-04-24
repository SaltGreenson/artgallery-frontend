import React, { InputHTMLAttributes, ReactNode } from "react";

import { FlexBlock } from "@/components/common/Block";
import Paragraph from "@/components/common/Paragraph";

import { Colors } from "@/styles/colors";
import {
  StyledElementContainer,
  StyledToggleElementWrapper,
  StyledToggleRadio,
} from "./styles";
import { UseFormRegisterReturn } from "react-hook-form";
import { withLabels } from "@/utils/hocs";

export type ToggleElementType = {
  icon?: ReactNode;
  label?: string;
  key?: string;
  defaultChecked?: boolean;
};

export interface IToggleProps extends InputHTMLAttributes<HTMLInputElement> {
  elements?: ToggleElementType[];
  error?: string;
  fontSize?: string;
  noPadding?: boolean;
  isFlexAlign?: boolean;
  label?: string;
  justify?: "space-between" | string;
  noBackground?: boolean;
  register?: UseFormRegisterReturn<string>;
}

const Toggle = ({
  elements,
  fontSize,
  noPadding,
  justify,
  noBackground,
  isFlexAlign,
  register,
  ...props
}: IToggleProps): JSX.Element => (
  <FlexBlock
    gap="5px"
    align="center"
    height="100%"
    flexWrap="wrap"
    direction="row"
    justify={justify}
  >
    {elements &&
      elements.map((el, idx) => (
        <StyledToggleElementWrapper key={idx}>
          <StyledToggleRadio
            type="radio"
            value={el.key}
            defaultChecked={el.defaultChecked}
            {...register}
            {...props}
            noBackground={noBackground}
          />
          <StyledElementContainer
            isFlexAlign={isFlexAlign}
            noPadding={noPadding}
          >
            {el.icon && <div>{el.icon}</div>}
            {el.label && (
              <Paragraph
                fontSize={fontSize}
                lineHeight="10px"
                margin="0"
                color={Colors.GREY}
                bold
              >
                {el.label}
              </Paragraph>
            )}
          </StyledElementContainer>
        </StyledToggleElementWrapper>
      ))}
  </FlexBlock>
);
export default withLabels(Toggle);
