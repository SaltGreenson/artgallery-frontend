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
import { IGallery } from "@/models/IGallery";

interface CardProps {
  gallery: IGallery;
}

const Card = ({ gallery }: CardProps): JSX.Element => {
  const { dislikes, likes, photo, user, title } = gallery;
  const renderIcon = useCallback(
    (
      variant: "like" | "dislike" | "selfLiked" | "selfDisliked",
      quantity: number
    ) => (
      <FlexBlock gap="5px" align="center">
        <StyledCardIconContainer>
          <CustomButton variant="transparent">
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
        <StyledCardImage src={gallery.photo.compressedUrl} />
      </StyledCardImageContainer>
      <StyledCardContentContainer>
        <FlexBlock gap="5px" justify="flex-end">
          <Paragraph variant="default" color={Colors.FONT_SIZE_GREY} bold>
            Posted by:
          </Paragraph>
          <CustomLink href={`/account/${user._id}`} bold>
            {user.name}
          </CustomLink>
        </FlexBlock>

        <StyledCardTextContainer>
          <Title variant="medium">{title}</Title>
        </StyledCardTextContainer>

        <FlexBlock justify="space-between">
          <FlexBlock gap="10px">
            {renderIcon("like", likes)}
            {renderIcon("dislike", dislikes)}
          </FlexBlock>

          <a href={photo.originalUrl} target="_blank" rel="noreferrer">
            <CustomButton variant="transparent">
              <MdFileDownload fontSize="30px" color={Colors.FONT_SIZE_GREY} />
            </CustomButton>
          </a>
        </FlexBlock>
      </StyledCardContentContainer>
    </StyledCardContainer>
  );
};

export default Card;
