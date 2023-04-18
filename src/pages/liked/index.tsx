import React, { useEffect } from "react";

import dynamic from "next/dynamic";
import Preloader from "@/components/common/Preloader";
import MainLayout from "@/components/layouts/Main";
import GalleryViewLayout from "@/components/layouts/Gallery";
import createAxiosInstance from "@/utils/http/axiosInstance";
import { userActions } from "@/store/userReducer/actions";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import { IGallery } from "@/models/IGallery";
import { NextPageContext } from "next";
import { ILikedPosts } from "@/models/ILikedPosts";
import { serverSideAxiosErrorHandler } from "@/utils/handlers/serverSideAxiosError.handler";
import { getAccessTokenHelper } from "@/utils/helpers/getAccessToken.helper";

const DynamicLikedContent = dynamic(() => import("../../pagesContent/Liked"), {
  loading: () => (
    <GalleryViewLayout title="Liked">
      <Preloader variant="card" />
    </GalleryViewLayout>
  ),
});

interface LikedPageProps {
  likedPosts: IGallery[];
  setLikedPosts: (likedPosts: IGallery[]) => void;
}

const Liked = ({ likedPosts, setLikedPosts }: LikedPageProps): JSX.Element => {
  useEffect(() => {
    setLikedPosts(likedPosts);
  }, [likedPosts]);

  return (
    <MainLayout>
      <DynamicLikedContent />
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
    const data = (await instance.get<ILikedPosts>("/users/liked-posts")).data;

    return {
      props: {
        // likedPosts: data.likedPosts,
      },
    };
  } catch (error: any) {
    return serverSideAxiosErrorHandler(error, context, { likedPosts: [] });
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setLikedPosts: bindActionCreators(userActions.setLikedPosts, dispatch),
});

export default connect(null, mapDispatchToProps)(Liked);
