import React from "react";
import GalleryViewLayout from "src/components/layouts/Gallery";
import Card from "@/components/elements/Card";
import { IGalleryPageProps } from "@/pages/gallery";
import { IAuthUser } from "@/models/IUser";

interface IGalleryDynamicPageProps extends IGalleryPageProps {
  authUser: IAuthUser | null;
  isFetchingDislikes: boolean;
  isFetchingLikes: boolean;
}

const Gallery = ({
  authUser,
  galleries,
  likePost,
  dislikePost,
  isFetchingLikes,
  isFetchingDislikes,
}: IGalleryDynamicPageProps): JSX.Element => (
  <GalleryViewLayout title="Gallery">
    {galleries &&
      galleries.map((gallery, idx) => (
        <Card
          key={gallery._id}
          authUser={authUser}
          gallery={gallery}
          likePost={likePost}
          dislikePost={dislikePost}
          isFetchingLikes={isFetchingLikes}
          isFetchingDislikes={isFetchingDislikes}
          idx={idx}
        />
      ))}
  </GalleryViewLayout>
);

export default Gallery;
