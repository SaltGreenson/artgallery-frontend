import React, { useEffect } from "react";

import dynamic from "next/dynamic";
import Preloader from "@/components/common/Preloader";
import MainLayout from "@/components/layouts/Main";
import GalleryViewLayout from "@/components/layouts/Gallery";
import { NextPageContext } from "next";
import { serverSideAxiosErrorHandler } from "@/utils/handlers/serverSideAxiosError.handler";
import { bindActionCreators, Dispatch } from "redux";
import { connect, useSelector } from "react-redux";
import { IGallery } from "@/models/IGallery";
import { galleryActions } from "@/store/galleryReducer/actions";
import axios from "axios";
import { API_URL } from "@/http/api";
import { dislikePost, likePost } from "@/store/galleryReducer/actionCreators";
import {
  getGalleries,
  getIsFetchingDislikes,
  getIsFetchingLikes,
} from "@/selectors/gallerySelectors";
import { getAuthUser } from "@/selectors/userSelectors";

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
  const authUser = useSelector(getAuthUser);
  const isFetchingLikes = useSelector(getIsFetchingLikes);
  const isFetchingDislikes = useSelector(getIsFetchingDislikes);

  useEffect(() => {
    setGalleries(galleries);
  }, []);

  return (
    <MainLayout>
      <DynamicGalleryContent
        authUser={authUser}
        galleries={galleriesFromRedux}
        setGalleries={setGalleries}
        likePost={likePost}
        dislikePost={dislikePost}
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
