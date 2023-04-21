import React from "react";

import { NextPageContext } from "next";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";

import createAxiosInstance from "@/utils/http/axiosInstance";

import { serverSideAxiosErrorHandler } from "@/utils/handlers/serverSideAxiosError.handler";
import { getAccessTokenHelper } from "@/utils/helpers/getAccessToken.helper";

import { ILikeDislikeResponse } from "@/models/ILikeDislikeResponse";
import { IGallery } from "@/models/IGallery";
import GalleryContainer from "@/containers/Gallery";
import { collectLikedGalleries } from "@/store/galleryReducer/actionCreators";

interface ILikedPageProps {
  galleries: IGallery[];
  collectGalleries: typeof collectLikedGalleries;
}

const Liked = ({
  collectGalleries,
  galleries,
}: ILikedPageProps): JSX.Element => (
  <GalleryContainer
    collectGalleries={collectGalleries}
    galleries={galleries}
    title="Liked"
    withoutForm
  />
);

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
    return serverSideAxiosErrorHandler(error, context, { galleries: [] });
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  collectGalleries: bindActionCreators(collectLikedGalleries, dispatch),
});

export default connect(null, mapDispatchToProps)(Liked);
