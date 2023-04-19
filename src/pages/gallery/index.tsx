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

import Preloader from "@/components/common/Preloader";
import MainLayout from "@/components/layouts/Main";
import GalleryViewLayout from "@/components/layouts/Gallery";

import { serverSideAxiosErrorHandler } from "@/utils/handlers/serverSideAxiosError.handler";
import axios from "axios";
import { IGallery } from "@/models/IGallery";
import { API_URL } from "@/http/api";

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

export interface IGalleryPageProps {
  galleries: IGallery[];
  setGalleries: (galleries: IGallery[]) => void;
  likePost: (galleryId: string, index: number, isLiked: boolean) => void;
  dislikePost: (galleryId: string, index: number, isDisliked: boolean) => void;
}

const Gallery = ({
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

export const getServerSideProps = async (context: NextPageContext) => {
  try {
    const data = (await axios.get<IGallery[]>(`${API_URL}/gallery`)).data;
    return {
      props: {
        galleries: data,
      },
    };
  } catch (error: any) {
    return serverSideAxiosErrorHandler(error, context, { galleries: [] });
  }
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setGalleries: bindActionCreators(galleryActions.setGalleries, dispatch),
  likePost: bindActionCreators(likePost, dispatch),
  dislikePost: bindActionCreators(dislikePost, dispatch),
});

export default connect(null, mapDispatchToProps)(Gallery);
