import React, { useEffect } from "react";

import { connect, useSelector } from "react-redux";
import dynamic from "next/dynamic";
import { NextPageContext } from "next";
import { bindActionCreators, Dispatch } from "redux";

import { galleryActions } from "@/store/galleryReducer/actions";
import {
  getGalleries,
  getIsFetchingDislikes,
  getIsFetchingLikes,
} from "@/selectors/gallerySelectors";
import { getDislikedPosts, getLikedPosts } from "@/selectors/userSelectors";
import { dislikePost, likePost } from "@/store/galleryReducer/actionCreators";

import createAxiosInstance from "@/utils/http/axiosInstance";

import { IGalleryPageProps } from "@/pages/gallery";
import Preloader from "@/components/common/Preloader";
import MainLayout from "@/components/layouts/Main";
import GalleryViewLayout from "@/components/layouts/Gallery";

import { serverSideAxiosErrorHandler } from "@/utils/handlers/serverSideAxiosError.handler";
import { getAccessTokenHelper } from "@/utils/helpers/getAccessToken.helper";

import { ILikeDislikeResponse } from "@/models/ILikeDislikeResponse";

const DynamicGalleryContent = dynamic(
  () => import("../../pagesContent/Gallery"),
  {
    loading: () => (
      <GalleryViewLayout title="Gallery">
        <Preloader variant="card" />
      </GalleryViewLayout>
    ),
  }
);

const Liked = ({
  galleries,
  setGalleries,
  likePost,
  dislikePost,
}: IGalleryPageProps): JSX.Element => {
  const galleriesFromRedux = useSelector(getGalleries);
  const likedPosts = useSelector(getLikedPosts);
  const dislikedPosts = useSelector(getDislikedPosts);
  const isFetchingLikes = useSelector(getIsFetchingLikes);
  const isFetchingDislikes = useSelector(getIsFetchingDislikes);

  useEffect(() => {
    setGalleries(galleries);
  }, []);

  return (
    <MainLayout>
      <DynamicGalleryContent
        galleries={galleriesFromRedux}
        setGalleries={setGalleries}
        likePost={likePost}
        likedPosts={likedPosts}
        dislikePost={dislikePost}
        dislikedPosts={dislikedPosts}
        isFetchingLikes={isFetchingLikes}
        isFetchingDislikes={isFetchingDislikes}
      />
    </MainLayout>
  );
};

export async function getServerSideProps(context: NextPageContext) {
  const token = getAccessTokenHelper(context);

  if (!token) {
    return {
      redirect: {
        destination: "/log-in",
        permanent: false,
      },
    };
  }

  try {
    const instance = createAxiosInstance(token);
    const data = (
      await instance.get<ILikeDislikeResponse>("/users/liked-posts")
    ).data;
    return {
      props: {
        galleries: data.likedPosts,
      },
    };
  } catch (error: any) {
    return serverSideAxiosErrorHandler(error, context, { likedPosts: [] });
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setGalleries: bindActionCreators(galleryActions.setGalleries, dispatch),
  likePost: bindActionCreators(likePost, dispatch),
  dislikePost: bindActionCreators(dislikePost, dispatch),
});

export default connect(null, mapDispatchToProps)(Liked);
