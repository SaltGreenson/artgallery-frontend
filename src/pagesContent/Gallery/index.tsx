import React from "react";
import GalleryViewLayout from "src/components/layouts/Gallery";
import Card from "@/components/elements/Card";
import { IGalleryPageProps } from "@/pages/gallery";
import { ILikedPosts } from "@/models/ILikedPosts";
import { IDislikedPosts } from "@/models/IDislikedPosts";
import { withCardPreloader } from "@/utils/hocs";

export interface IGalleryDynamicPageProps extends IGalleryPageProps {
  title: string;
  likedPosts: ILikedPosts[];
  dislikedPosts: IDislikedPosts[];
  isFetchingLikes: boolean;
  isFetchingDislikes: boolean;
}

const Gallery = ({
  title,
  galleries,
  ...cardProps
}: IGalleryDynamicPageProps): JSX.Element => (
  <GalleryViewLayout title={title}>
    {galleries &&
      galleries.map((gallery, idx) => (
        <Card key={gallery._id} gallery={gallery} idx={idx} {...cardProps} />
      ))}
  </GalleryViewLayout>
);

export default withCardPreloader(Gallery);
