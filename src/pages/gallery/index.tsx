import React, { useEffect } from "react";

import dynamic from "next/dynamic";
import Preloader from "@/components/common/Preloader";
import MainLayout from "@/components/layouts/Main";
import GalleryViewLayout from "@/components/layouts/Gallery";
import { NextPageContext } from "next";
import { serverSideAxiosErrorHandler } from "@/utils/handlers/serverSideAxiosError.handler";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import { IGallery } from "@/models/IGallery";
import { galleryActions } from "@/store/galleryReducer/actions";
import axios from "axios";
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

interface GalleryPageProps {
  galleries: IGallery[];
  setGalleries: (likedPosts: IGallery[]) => void;
}

const Gallery = ({
  galleries,
  setGalleries,
}: GalleryPageProps): JSX.Element => {
  useEffect(() => {
    setGalleries(galleries);
  }, []);

  return (
    <MainLayout>
      <DynamicGalleryContent galleries={galleries} />
    </MainLayout>
  );
};

export async function getServerSideProps(context: NextPageContext) {
  try {
    const data = (await axios.get<IGallery[]>(`${API_URL}/gallery`)).data;
    console.log(data.length);
    return {
      props: {
        galleries: data,
      },
    };
  } catch (error: any) {
    return serverSideAxiosErrorHandler(error, context, { galleries: [] });
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setGalleries: bindActionCreators(galleryActions.setGalleries, dispatch),
});

export default connect(null, mapDispatchToProps)(Gallery);
