import React from "react";

import dynamic from "next/dynamic";
import Preloader from "@/components/common/Preloader";
import MainLayout from "@/components/layouts/Main";
import { NextPageContext } from "next";
import { getAccessTokenHelper } from "@/utils/helpers/getAccessToken.helper";
import { bindActionCreators, Dispatch } from "redux";
import { createGallery } from "@/store/galleryReducer/actionCreators";
import { connect, useSelector } from "react-redux";
import { CreateProps } from "@/pagesContent/Create";
import { getAuthUser } from "@/selectors/userSelectors";
import { getIsFetchingGallery } from "@/selectors/gallerySelectors";

const DynamicCreateContent = dynamic(
  () => import("../../pagesContent/Create"),
  {
    loading: () => <Preloader variant="default" />,
  }
);

const Create = ({ createGallery }: CreateProps): JSX.Element => {
  const authUser = useSelector(getAuthUser);
  const isFetching = useSelector(getIsFetchingGallery);
  return (
    <MainLayout authUser={authUser}>
      <DynamicCreateContent
        createGallery={createGallery}
        isFetching={isFetching}
      />
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

  return {
    props: {},
  };
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  createGallery: bindActionCreators(createGallery, dispatch),
});

export default connect(null, mapDispatchToProps)(Create);
