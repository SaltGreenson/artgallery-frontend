import React, { useCallback, useEffect, useState } from "react";

import InfiniteScroll from "react-infinite-scroll-component";

import { StyledGalleryFormContainer } from "@/pagesContent/Gallery/styles";

import GalleryViewLayout from "src/components/layouts/Gallery";
import Card from "@/components/elements/Card";
import Preloader from "@/components/common/Preloader";
import { FlexBlock } from "@/components/common/Block";
import Title from "@/components/common/Title";
import SearchGalleryForm from "@/components/forms/SearchGallery";

import { withCardPreloader } from "@/utils/hocs";

import { IGallery } from "@/models/IGallery";
import { IDislikedPosts } from "@/models/IDislikedPosts";
import { ILikedPosts } from "@/models/ILikedPosts";
import { IGalleryContainerProps } from "@/containers/Gallery";

export interface IGalleryDynamicPageProps extends IGalleryContainerProps {
  authUserId?: string;
  title: string;
  likedPosts: ILikedPosts[];
  dislikedPosts: IDislikedPosts[];
  isFetchingLikes: boolean;
  isFetchingDislikes: boolean;
}

const Gallery = ({
  authUserId,
  collectGalleries,
  title,
  galleries,
  likePost,
  dislikePost,
  searchStringParam,
  isFirstLikedParam,
  withoutForm,
  ...cardProps
}: IGalleryDynamicPageProps): JSX.Element => {
  const [skip, setSkip] = useState(10);
  const [items, setItems] = useState<IGallery[]>([]);
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    if (!isFirstRender) {
      setItems([]);
    } else {
      setIsFirstRender(false);
    }
  }, []);

  useEffect(() => {
    if (!isFirstRender) {
      setItems((prev) => [...prev, ...galleries]);
    }
  }, [isFirstRender, galleries]);

  const handleLikePost = useCallback(
    (galleryId: string, idx: number, isLiked: boolean) => {
      if (isLiked) {
        items[idx].likes -= 1;
      } else {
        items[idx].likes += 1;
      }
      likePost(galleryId);
      setItems(items);
    },
    [items]
  );

  const handleDislikePost = useCallback(
    (galleryId: string, idx: number, isDisliked: boolean) => {
      if (isDisliked) {
        items[idx].dislikes -= 1;
      } else {
        items[idx].dislikes += 1;
      }
      dislikePost(galleryId);
      setItems(items);
    },
    [items]
  );

  const fetchMoreData = useCallback(() => {
    collectGalleries(skip);
    setSkip((prev) => prev + 10);
  }, [collectGalleries, skip]);

  return (
    <GalleryViewLayout title={title}>
      {!withoutForm && (
        <StyledGalleryFormContainer>
          <SearchGalleryForm
            searchStringParam={searchStringParam}
            isFirstLikedParam={isFirstLikedParam}
          />
        </StyledGalleryFormContainer>
      )}
      {!items.length ? (
        <Title variant="thin" fontSize="26px">
          Galleries not found
        </Title>
      ) : (
        <InfiniteScroll
          dataLength={items.length}
          next={fetchMoreData}
          hasMore={!!galleries.length}
          loader={
            <FlexBlock padding="20px 0 0 0" gap="20px" direction="column">
              <Preloader variant="card" />
              <Preloader variant="card" />
            </FlexBlock>
          }
          scrollThreshold={0.5}
          style={{ overflow: "unset" }}
        >
          <FlexBlock
            width="100%"
            align="center"
            justify="center"
            gap="20px"
            flex={1}
            direction="column"
          >
            {items &&
              items.map((gallery, idx) => (
                <Card
                  key={gallery._id}
                  gallery={gallery}
                  authUserId={authUserId}
                  idx={idx}
                  likePost={handleLikePost}
                  dislikePost={handleDislikePost}
                  {...cardProps}
                />
              ))}
          </FlexBlock>
        </InfiniteScroll>
      )}
    </GalleryViewLayout>
  );
};

export default withCardPreloader(Gallery);
