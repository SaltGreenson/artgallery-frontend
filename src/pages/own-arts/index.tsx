import React from "react";

import { NextPageContext } from "next";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";

import createAxiosInstance from "@/utils/http/axiosInstance";

import { serverSideAxiosErrorHandler } from "@/utils/handlers/serverSideAxiosError.handler";
import { getAccessTokenHelper } from "@/utils/helpers/getAccessToken.helper";
import { createQueryStringHelper } from "@/utils/helpers/createQueryString.helper";

import { IGallery } from "@/models/IGallery";
import { collectOwnGalleries } from "@/store/galleryReducer/actionCreators";
import GalleryContainer from "@/containers/Gallery";

interface OwnArtsPageProps {
  galleries: IGallery[];
  isFirstLiked?: string;
  searchString?: string;
  collectGalleries: typeof collectOwnGalleries;
}

const OwnArts = ({
  collectGalleries,
  galleries,
  isFirstLiked,
  searchString,
}: OwnArtsPageProps): JSX.Element => (
  <GalleryContainer
    collectGalleries={collectGalleries}
    galleries={galleries}
    title="Own arts"
    isFirstLikedParam={isFirstLiked}
    searchStringParam={searchString}
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
    const { isFirstLiked, searchString } = context.query;

    const queryString = createQueryStringHelper({
      isFirstLiked: isFirstLiked as string,
      searchString: searchString as string,
    });
    const data = (
      await instance.get<IGallery[]>(`/galleries/own?${queryString}`)
    ).data;

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
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  collectGalleries: bindActionCreators(collectOwnGalleries, dispatch),
});

export default connect(null, mapDispatchToProps)(OwnArts);
