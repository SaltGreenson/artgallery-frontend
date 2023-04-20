import React, { memo, useEffect } from "react";

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
import {
  getAuthUser,
  getDislikedPosts,
  getLikedPosts,
} from "@/selectors/userSelectors";
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
  dislikePost: (galleryId: string) => void;
  setGalleries: (galleries: IGallery[]) => void;
  likePost: (galleryId: string) => void;
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
  const authUser = useSelector(getAuthUser);
  const galleriesFromRedux = useSelector(getGalleries);
  const likedPosts = useSelector(getLikedPosts);
  const dislikedPosts = useSelector(getDislikedPosts);
  const isFetchingLikes = useSelector(getIsFetchingLikes);
  const isFetchingDislikes = useSelector(getIsFetchingDislikes);

  useEffect(() => {
    setGalleries(galleries);
  }, []);

  return (
    <MainLayout authUser={authUser}>
      <DynamicGalleryContent
        authUserId={authUser?._id}
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
