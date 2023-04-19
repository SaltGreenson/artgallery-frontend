import React from "react";

import dynamic from "next/dynamic";
import Preloader from "@/components/common/Preloader";
import MainLayout from "@/components/layouts/Main";
import GalleryViewLayout from "@/components/layouts/Gallery";
import { NextPageContext } from "next";
import { getAccessTokenHelper } from "@/utils/helpers/getAccessToken.helper";
import { bindActionCreators, Dispatch } from "redux";
import { createGallery } from "@/store/galleryReducer/actionCreators";
import { connect } from "react-redux";
import { CreateProps } from "@/pagesContent/Create";

const DynamicCreateContent = dynamic(
  () => import("../../pagesContent/Create"),
  {
    loading: () => (
      <GalleryViewLayout title="Create">
        <Preloader variant="default" />
      </GalleryViewLayout>
    ),
  }
);

const Create = ({ createGallery }: CreateProps): JSX.Element => (
  <MainLayout>
    <DynamicCreateContent createGallery={createGallery} />
  </MainLayout>
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

  return {
    props: {},
  };
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  createGallery: bindActionCreators(createGallery, dispatch),
});

export default connect(null, mapDispatchToProps)(Create);
