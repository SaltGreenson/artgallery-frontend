import React, { useCallback } from "react";

import Title from "@/components/common/Title";
import Paragraph from "@/components/common/Paragraph";
import CustomLink from "@/components/common/Link";
import { FlexBlock } from "@/components/common/Block";
import { numberPrettier } from "@/utils/helpers/formatters.helper";
import { MdFileDownload } from "react-icons/md";
import CustomButton from "@/components/common/Button";

import {
  likeDislikeFontColorConfig,
  likeDislikeIconsConfig,
} from "@/components/elements/Card/config";

import { Colors } from "@/styles/colors";

import {
  StyledCardContainer,
  StyledCardContentContainer,
  StyledCardIconContainer,
  StyledCardImage,
  StyledCardImageContainer,
  StyledCardTextContainer,
} from "@/components/elements/Card/styles";

const Card = () => {
  const renderIcon = useCallback(
    (
      variant: "like" | "dislike" | "selfLiked" | "selfDisliked",
      quantity: number
    ) => (
      <FlexBlock gap="5px" align="center">
        <StyledCardIconContainer>
          <CustomButton variant="icon">
            {likeDislikeIconsConfig[variant]}
          </CustomButton>
        </StyledCardIconContainer>
        <Paragraph color={likeDislikeFontColorConfig[variant]} bold>
          {numberPrettier(quantity)}
        </Paragraph>
      </FlexBlock>
    ),
    []
  );

  return (
    <StyledCardContainer>
      <StyledCardImageContainer>
        <StyledCardImage src="/bigImage.png" />
      </StyledCardImageContainer>
      <StyledCardContentContainer>
        <FlexBlock gap="5px" justify="flex-end">
          <Paragraph variant="default" color={Colors.FONT_SIZE_GREY} bold>
            Posted by:
          </Paragraph>
          <CustomLink href="#" bold>
            Vlad Yuskovich
          </CustomLink>
        </FlexBlock>

        <StyledCardTextContainer>
          <Title variant="medium">
            Vlad yuskovich is super cool i like him
          </Title>
        </StyledCardTextContainer>

        <FlexBlock gap="10px">
          {renderIcon("selfLiked", 1200000)}
          {renderIcon("dislike", 121500)}
          <a href="#">
            <MdFileDownload fontSize="30px" color={Colors.FONT_SIZE_GREY} />
          </a>
        </FlexBlock>
      </StyledCardContentContainer>
    </StyledCardContainer>
  );
};

export default Card;
