import React from "react";
import GalleryViewLayout from "src/components/layouts/Gallery";
import Card from "@/components/elements/Card";
import { IGallery } from "@/models/IGallery";

interface LikedDynamicPageProps {
  likedPosts: IGallery[];
}

const Liked = ({ likedPosts }: LikedDynamicPageProps): JSX.Element => (
  <GalleryViewLayout title="Liked">
    {likedPosts &&
      likedPosts.map((gallery) => <Card key={gallery._id} gallery={gallery} />)}
  </GalleryViewLayout>
);

export default Liked;
