import React from "react";

import dynamic from "next/dynamic";
import Preloader from "@/components/common/Preloader";
import { NextPageContext } from "next";
import { getAccessTokenHelper } from "@/utils/helpers/getAccessToken.helper";

const DynamicLogInContent = dynamic(() => import("../../pagesContent/LogIn"), {
  loading: () => <Preloader variant="default" />,
});

const LogIn = () => <DynamicLogInContent />;

export async function getServerSideProps(context: NextPageContext) {
  const token = getAccessTokenHelper(context);

  if (token) {
    return {
      redirect: {
        destination: "/gallery",
        permanent: true,
      },
    };
  }

  return {
    props: {},
  };
}

export default LogIn;
