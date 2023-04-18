import React, { useCallback, useEffect, useState } from "react";

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
  StyledCardImage,
  StyledCardImageContainer,
  StyledCardTextContainer,
} from "@/components/elements/Card/styles";
import { IGallery } from "@/models/IGallery";
import { isIdInArrayHelper } from "@/utils/helpers/idInArray.helper";
import { IAuthUser } from "@/models/IUser";

interface CardProps {
  authUser: IAuthUser | null;
  gallery: IGallery;
  likePost: (galleryId: string, idx: number, isLiked: boolean) => void;
  dislikePost: (galleryId: string, idx: number, isDisliked: boolean) => void;
  isFetchingLikes: boolean;
  isFetchingDislikes: boolean;
  idx: number;
}
const Card = ({
  authUser,
  gallery,
  likePost,
  dislikePost,
  isFetchingLikes,
  isFetchingDislikes,
  idx,
}: CardProps): JSX.Element => {
  const [{ _id, dislikes, likes, photo, user, title }] = useState(gallery);
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [isDisliked, setIsDisliked] = useState<boolean>(false);

  useEffect(() => {
    setIsLiked(authUser ? isIdInArrayHelper(_id, authUser.likedPosts) : false);
    setIsDisliked(
      authUser ? isIdInArrayHelper(_id, authUser.dislikedPosts) : false
    );
  }, [authUser, setIsLiked, setIsDisliked, _id]);

  const handleOnClickLike = useCallback(() => {
    likePost(_id, idx, isLiked);
    setIsLiked((prev) => !prev);
  }, [_id, idx, likePost, isLiked]);

  const handleOnClickDislike = useCallback(() => {
    dislikePost(_id, idx, isDisliked);
    setIsDisliked((prev) => !prev);
  }, [_id, idx, dislikePost, isDisliked]);

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
            <FlexBlock gap="5px" align="center">
              <CustomButton
                variant="transparent"
                isFetching={isFetchingLikes}
                onClick={handleOnClickLike}
              >
                {likeDislikeIconsConfig(isLiked).like}
              </CustomButton>
              <Paragraph color={likeDislikeFontColorConfig.like} bold>
                {numberPrettier(likes)}
              </Paragraph>
            </FlexBlock>

            <FlexBlock gap="5px" align="center">
              <CustomButton
                variant="transparent"
                isFetching={isFetchingDislikes}
                onClick={handleOnClickDislike}
              >
                {likeDislikeIconsConfig(isDisliked).dislike}
              </CustomButton>
              <Paragraph color={likeDislikeFontColorConfig.dislike} bold>
                {numberPrettier(dislikes)}
              </Paragraph>
            </FlexBlock>
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
