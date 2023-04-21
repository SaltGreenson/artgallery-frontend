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

import { serverSideAxiosErrorHandler } from "@/utils/handlers/serverSideAxiosError.handler";
import { IGallery } from "@/models/IGallery";
import createAxiosInstance from "@/utils/http/axiosInstance";
import { createQueryStringHelper } from "@/utils/helpers/createQueryString.helper";

const DynamicGalleryContent = dynamic(
  () => import("../../pagesContent/Gallery"),
  {
    loading: () => <Preloader variant="default" />,
  }
);

export interface IGalleryPageProps {
  title?: string;
  isFirstLiked?: string;
  searchString?: string;
  galleries: IGallery[];
  dislikePost: (galleryId: string) => void;
  setGalleries: (galleries: IGallery[]) => void;
  likePost: (galleryId: string) => void;
  collectGalleries: (
    skip?: number,
    limit?: number,
    userId?: string,
    searchString?: string,
    isFirstLiked?: string
  ) => void;
}

const Gallery = ({
  collectGalleries,
  dislikePost,
  galleries,
  likePost,
  setGalleries,
  isFirstLiked,
  searchString,
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
  }, [setGalleries, galleries]);

  return (
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
      isFirstLikedParam={isFirstLiked}
      searchStringParam={searchString}
    />
  );
};

export const getServerSideProps = async (context: NextPageContext) => {
  try {
    const instance = createAxiosInstance();
    const { isFirstLiked, searchString } = context.query;

    const queryString = createQueryStringHelper({
      isFirstLiked: isFirstLiked as string,
      searchString: searchString as string,
    });
    const data = (await instance.get<IGallery[]>(`/gallery?${queryString}`))
      .data;

    return {
      props: {
        galleries: data,
        isFirstLiked: isFirstLiked || null,
        searchString: searchString || null,
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
