import React, { useCallback, useState } from "react";
import GalleryViewLayout from "src/components/layouts/Gallery";
import Card from "@/components/elements/Card";
import { IGalleryPageProps } from "@/pages/gallery";
import { ILikedPosts } from "@/models/ILikedPosts";
import { IDislikedPosts } from "@/models/IDislikedPosts";
import { withCardPreloader } from "@/utils/hocs";
import InfiniteScroll from "react-infinite-scroll-component";
import Preloader from "@/components/common/Preloader";
import { FlexBlock } from "@/components/common/Block";

export interface IGalleryDynamicPageProps extends IGalleryPageProps {
  title: string;
  likedPosts: ILikedPosts[];
  dislikedPosts: IDislikedPosts[];
  isFetchingLikes: boolean;
  isFetchingDislikes: boolean;
  isFetchingGalleries: boolean;
}

const Gallery = ({
  collectGalleries,
  title,
  galleries,
  isFetchingGalleries,
  ...cardProps
}: IGalleryDynamicPageProps): JSX.Element => {
  const [skip, setSkip] = useState(0);

  const fetchMoreData = useCallback(() => {
    collectGalleries(skip);
    setSkip((prev) => prev + 10);
  }, [collectGalleries, skip]);

  return (
    <GalleryViewLayout title={title}>
      <InfiniteScroll
        dataLength={galleries.length}
        next={fetchMoreData}
        hasMore={isFetchingGalleries}
        loader={<Preloader variant="card" />}
        scrollThreshold={0.9}
      >
        <FlexBlock
          width="100%"
          align="center"
          justify="center"
          gap="20px"
          flex={1}
          direction="column"
        >
          {galleries &&
            galleries.map((gallery, idx) => (
              <Card
                key={gallery._id}
                gallery={gallery}
                idx={idx}
                {...cardProps}
              />
            ))}
        </FlexBlock>
      </InfiniteScroll>
    </GalleryViewLayout>
  );
};

export default withCardPreloader(Gallery);
