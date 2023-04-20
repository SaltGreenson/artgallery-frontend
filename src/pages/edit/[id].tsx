import React from "react";
import { NextPageContext } from "next";

import { serverSideAxiosErrorHandler } from "@/utils/handlers/serverSideAxiosError.handler";
import { IGallery } from "@/models/IGallery";
import createAxiosInstance from "@/utils/http/axiosInstance";
import dynamic from "next/dynamic";
import Preloader from "@/components/common/Preloader";
import { connect, useSelector } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { createGallery } from "@/store/galleryReducer/actionCreators";
import { getIsFetchingGallery } from "@/selectors/gallerySelectors";

const DynamicEditContent = dynamic(() => import("../../pagesContent/Edit"), {
  loading: () => <Preloader variant="default" />,
});

interface EditPageProps {
  gallery: IGallery;
  editGallery: (photo: File, title: string) => void;
}

const Edit = ({ editGallery, gallery }: EditPageProps): JSX.Element => {
  const isFetching = useSelector(getIsFetchingGallery);
  return (
    <DynamicEditContent
      editGallery={editGallery}
      defaultValues={gallery}
      isFetching={isFetching}
    />
  );
};

export async function getServerSideProps(context: NextPageContext) {
  try {
    const instance = createAxiosInstance();
    const { id } = context.query;
    const data = (await instance.get<IGallery>(`/gallery/one?galleryId=${id}`))
      .data;
    return {
      props: {
        gallery: data,
      },
    };
  } catch (error: any) {
    return serverSideAxiosErrorHandler(error, context, { gallery: {} });
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  editGallery: bindActionCreators(createGallery, dispatch),
});

export default connect(null, mapDispatchToProps)(Edit);
