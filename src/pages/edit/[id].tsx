import React from "react";
import { NextPageContext } from "next";

import { serverSideAxiosErrorHandler } from "@/utils/handlers/serverSideAxiosError.handler";
import { IGallery } from "@/models/IGallery";
import createAxiosInstance from "@/utils/http/axiosInstance";
import dynamic from "next/dynamic";
import Preloader from "@/components/common/Preloader";
import { connect, useSelector } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import {
  editGallery,
  removeGallery,
} from "@/store/galleryReducer/actionCreators";
import { getIsFetchingGallery } from "@/selectors/gallerySelectors";

const DynamicEditContent = dynamic(() => import("../../pagesContent/Edit"), {
  loading: () => <Preloader variant="default" />,
});

interface EditPageProps {
  gallery: IGallery;
  editGallery: (galleryId: string, title: string, callback: () => void) => void;
  removeGallery: (galleryId: string, callback: () => void) => void;
}

const Edit = ({
  editGallery,
  removeGallery,
  gallery,
}: EditPageProps): JSX.Element => {
  const isFetching = useSelector(getIsFetchingGallery);
  return (
    <DynamicEditContent
      editGallery={editGallery}
      removeGallery={removeGallery}
      defaultValues={gallery}
      isFetching={isFetching}
    />
  );
};

export async function getServerSideProps(context: NextPageContext) {
  try {
    const instance = createAxiosInstance();
    const { id } = context.query;
    const data = (
      await instance.get<IGallery>(`/galleries/one?galleryId=${id}`)
    ).data;
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
  editGallery: bindActionCreators(editGallery, dispatch),
  removeGallery: bindActionCreators(removeGallery, dispatch),
});

export default connect(null, mapDispatchToProps)(Edit);
