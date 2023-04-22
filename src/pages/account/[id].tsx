import React, { useCallback } from "react";
import { NextPageContext } from "next";

import { serverSideAxiosErrorHandler } from "@/utils/handlers/serverSideAxiosError.handler";
import { IGallery } from "@/models/IGallery";
import createAxiosInstance from "@/utils/http/axiosInstance";
import GalleryContainer from "@/containers/Gallery";
import { collectUserGalleries } from "@/store/galleryReducer/actionCreators";
import { createQueryStringHelper } from "@/utils/helpers/createQueryString.helper";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";

interface AccountPageProps {
  userId: string;
  isFirstLiked?: string;
  searchString?: string;
  galleries: IGallery[];
  collectGalleries: typeof collectUserGalleries;
}

const Account = ({
  userId,
  collectGalleries,
  galleries,
  isFirstLiked,
  searchString,
}: AccountPageProps): JSX.Element => {
  const collectGalleriesHandler = useCallback(
    (skip?: number) => {
      collectGalleries(userId, skip);
    },
    [collectGalleries, userId]
  );
  return (
    <GalleryContainer
      collectGalleries={collectGalleriesHandler}
      galleries={galleries}
      title="User account"
      isFirstLikedParam={isFirstLiked}
      searchStringParam={searchString}
    />
  );
};

export async function getServerSideProps(context: NextPageContext) {
  try {
    const instance = createAxiosInstance();
    const { id, isFirstLiked, searchString } = context.query;

    const queryString = createQueryStringHelper({
      userId: id as string,
      isFirstLiked: isFirstLiked as string,
      searchString: searchString as string,
    });

    const data = (await instance.get<IGallery[]>(`/gallery?${queryString}`))
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
}
const mapDispatchToProps = (dispatch: Dispatch) => ({
  collectGalleries: bindActionCreators(collectUserGalleries, dispatch),
});

export default connect(null, mapDispatchToProps)(Account);
