import React from "react";
import { NextPageContext } from "next";

import createAxiosInstance from "@/utils/http/axiosInstance";

import Gallery from "@/pages/gallery";

import { serverSideAxiosErrorHandler } from "@/utils/handlers/serverSideAxiosError.handler";
import { getAccessTokenHelper } from "@/utils/helpers/getAccessToken.helper";

import { ILikeDislikeResponse } from "@/models/ILikeDislikeResponse";
import { IGallery } from "@/models/IGallery";

interface LikedPageProps {
  galleries: IGallery[];
}

const Liked = ({ galleries }: LikedPageProps): JSX.Element => (
  <Gallery galleries={galleries} title="Liked" />
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

export default Liked;
