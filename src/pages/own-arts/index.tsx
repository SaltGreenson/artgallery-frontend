import React from "react";
import { NextPageContext } from "next";

import createAxiosInstance from "@/utils/http/axiosInstance";

import Gallery from "@/pages/gallery";

import { serverSideAxiosErrorHandler } from "@/utils/handlers/serverSideAxiosError.handler";
import { getAccessTokenHelper } from "@/utils/helpers/getAccessToken.helper";

import { IGallery } from "@/models/IGallery";

interface OwnArtsPageProps {
  galleries: IGallery[];
}

const OwnArts = ({ galleries }: OwnArtsPageProps): JSX.Element => (
  <Gallery galleries={galleries} title="Own arts" />
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
    const data = (await instance.get<IGallery[]>("/gallery/own")).data;
    return {
      props: {
        galleries: data,
      },
    };
  } catch (error: any) {
    return serverSideAxiosErrorHandler(error, context, { galleries: [] });
  }
}

export default OwnArts;
