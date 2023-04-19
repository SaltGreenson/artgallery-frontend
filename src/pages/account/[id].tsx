import React from "react";
import { NextPageContext } from "next";

import Gallery from "@/pages/gallery";

import { serverSideAxiosErrorHandler } from "@/utils/handlers/serverSideAxiosError.handler";
import { IGallery } from "@/models/IGallery";
import createAxiosInstance from "@/utils/http/axiosInstance";

interface AccountPageProps {
  galleries: IGallery[];
}

const Account = ({ galleries }: AccountPageProps): JSX.Element => (
  <Gallery galleries={galleries} title="User posts" />
);

export async function getServerSideProps(context: NextPageContext) {
  try {
    const instance = createAxiosInstance();
    const { id } = context.query;
    const data = (await instance.get<IGallery[]>(`/gallery?userId=${id}`)).data;
    return {
      props: {
        galleries: data,
      },
    };
  } catch (error: any) {
    return serverSideAxiosErrorHandler(error, context, { galleries: [] });
  }
}

export default Account;
