import React from "react";

import dynamic from "next/dynamic";
import Preloader from "@/components/common/Preloader/Default";
import { NextPageContext } from "next";
import { getAccessTokenHelper } from "@/utils/helpers/getAccessToken.helper";

const DynamicSignUnContent = dynamic(
  () => import("../../pagesContent/SignUp"),
  {
    loading: Preloader,
  }
);

const SignUp = () => <DynamicSignUnContent />;

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

export default SignUp;
