import React from "react";

import { connect } from "react-redux";
import { NextPageContext } from "next";
import { bindActionCreators, Dispatch } from "redux";
import { collectGalleries } from "@/store/galleryReducer/actionCreators";

import { serverSideAxiosErrorHandler } from "@/utils/handlers/serverSideAxiosError.handler";
import { IGallery } from "@/models/IGallery";
import createAxiosInstance from "@/utils/http/axiosInstance";
import { createQueryStringHelper } from "@/utils/helpers/createQueryString.helper";
import GalleryContainer from "@/containers/Gallery";

interface IGalleryPageProps {
  isFirstLiked?: string;
  searchString?: string;
  galleries: IGallery[];
  collectGalleries: typeof collectGalleries;
}

const Gallery = ({
  collectGalleries,
  galleries,
  isFirstLiked,
  searchString,
}: IGalleryPageProps): JSX.Element => (
  <GalleryContainer
    collectGalleries={collectGalleries}
    galleries={galleries}
    title="Gallery"
    isFirstLikedParam={isFirstLiked}
    searchStringParam={searchString}
  />
);

export const getServerSideProps = async (context: NextPageContext) => {
  try {
    const instance = createAxiosInstance();
    const { isFirstLiked, searchString } = context.query;

    const queryString = createQueryStringHelper({
      isFirstLiked: isFirstLiked as string,
      searchString: searchString as string,
    });
    const data = (await instance.get<IGallery[]>(`/galleries?${queryString}`))
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
  collectGalleries: bindActionCreators(collectGalleries, dispatch),
});

export default connect(null, mapDispatchToProps)(Gallery);
