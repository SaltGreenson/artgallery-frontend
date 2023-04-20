import React, { memo, useEffect } from "react";

import { connect, useSelector } from "react-redux";
import dynamic from "next/dynamic";
import { NextPageContext } from "next";
import { bindActionCreators, Dispatch } from "redux";

import { galleryActions } from "@/store/galleryReducer/actions";
import {
  getGalleries,
  getIsFetchingDislikes,
  getIsFetchingGallery,
  getIsFetchingLikes,
} from "@/selectors/gallerySelectors";
import { getDislikedPosts, getLikedPosts } from "@/selectors/userSelectors";
import {
  collectGalleries,
  dislikePost,
  likePost,
} from "@/store/galleryReducer/actionCreators";

import Preloader from "@/components/common/Preloader";
import MainLayout from "@/components/layouts/Main";

import { serverSideAxiosErrorHandler } from "@/utils/handlers/serverSideAxiosError.handler";
import { IGallery } from "@/models/IGallery";
import createAxiosInstance from "@/utils/http/axiosInstance";
import { SortType } from "@/store/galleryReducer/initialState";

const DynamicGalleryContent = dynamic(
  () => import("../../pagesContent/Gallery"),
  {
    loading: () => <Preloader variant="default" />,
  }
);

export interface IGalleryPageProps {
  title?: string;
  galleries: IGallery[];
  dislikePost: (galleryId: string, index: number, isDisliked: boolean) => void;
  setGalleries: (galleries: IGallery[]) => void;
  likePost: (galleryId: string, index: number, isLiked: boolean) => void;
  collectGalleries: (
    skip?: number,
    limit?: number,
    userId?: string,
    searchString?: string,
    sortType?: SortType
  ) => void;
}

const Gallery = ({
  collectGalleries,
  dislikePost,
  galleries,
  likePost,
  setGalleries,
  title = "Gallery",
}: IGalleryPageProps): JSX.Element => {
  const galleriesFromRedux = useSelector(getGalleries);
  const likedPosts = useSelector(getLikedPosts);
  const dislikedPosts = useSelector(getDislikedPosts);
  const isFetchingLikes = useSelector(getIsFetchingLikes);
  const isFetchingDislikes = useSelector(getIsFetchingDislikes);
  const isFetchingGalleries = useSelector(getIsFetchingGallery);

  useEffect(() => {
    setGalleries(galleries);
  }, []);

  return (
    <MainLayout>
      <DynamicGalleryContent
        title={title}
        collectGalleries={collectGalleries}
        galleries={galleriesFromRedux}
        setGalleries={setGalleries}
        likePost={likePost}
        likedPosts={likedPosts}
        dislikePost={dislikePost}
        dislikedPosts={dislikedPosts}
        isFetchingLikes={isFetchingLikes}
        isFetchingDislikes={isFetchingDislikes}
        isFetchingGalleries={isFetchingGalleries}
      />
    </MainLayout>
  );
};

export const getServerSideProps = async (context: NextPageContext) => {
  try {
    const instance = createAxiosInstance();
    const data = (await instance.get<IGallery[]>("/gallery")).data;
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
  collectGalleries: bindActionCreators(collectGalleries, dispatch),
});

export default connect(null, mapDispatchToProps)(memo(Gallery));
