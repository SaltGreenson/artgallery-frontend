import React, { memo, useEffect } from "react";

import { bindActionCreators, Dispatch } from "redux";
import { IGallery } from "@/models/IGallery";
import { galleryActions } from "@/store/galleryReducer/actions";

import { dislikePost, likePost } from "@/store/galleryReducer/actionCreators";
import { connect, useSelector } from "react-redux";
import {
  getAuthUser,
  getDislikedPosts,
  getLikedPosts,
} from "@/selectors/userSelectors";
import {
  getGalleries,
  getIsFetchingDislikes,
  getIsFetchingLikes,
} from "@/selectors/gallerySelectors";
import dynamic from "next/dynamic";
import Preloader from "@/components/common/Preloader";

const DynamicGalleryContent = dynamic(
  () => import("../../pagesContent/Gallery"),
  {
    loading: () => <Preloader variant="default" />,
  }
);

export interface IGalleryContainerProps {
  title: string;
  isFirstLikedParam?: string;
  searchStringParam?: string;
  galleries: IGallery[];
  withoutForm?: boolean;
  dislikePost: typeof dislikePost;
  likePost: typeof likePost;
  setGalleries: typeof galleryActions.setGalleries;
  collectGalleries: (skip?: number) => void;
}
const GalleryContainer = ({
  galleries,
  setGalleries,
  ...dynamicProps
}: IGalleryContainerProps) => {
  const authUser = useSelector(getAuthUser);
  const galleriesFromRedux = useSelector(getGalleries);
  const likedPosts = useSelector(getLikedPosts);
  const dislikedPosts = useSelector(getDislikedPosts);
  const isFetchingLikes = useSelector(getIsFetchingLikes);
  const isFetchingDislikes = useSelector(getIsFetchingDislikes);

  useEffect(() => {
    setGalleries(galleries);
  }, [setGalleries, galleries]);
  return (
    <DynamicGalleryContent
      authUserId={authUser?._id}
      galleries={galleriesFromRedux}
      setGalleries={setGalleries}
      likedPosts={likedPosts}
      dislikedPosts={dislikedPosts}
      isFetchingLikes={isFetchingLikes}
      isFetchingDislikes={isFetchingDislikes}
      {...dynamicProps}
    />
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setGalleries: bindActionCreators(galleryActions.setGalleries, dispatch),
  likePost: bindActionCreators(likePost, dispatch),
  dislikePost: bindActionCreators(dislikePost, dispatch),
});

export default connect(null, mapDispatchToProps)(memo(GalleryContainer));
