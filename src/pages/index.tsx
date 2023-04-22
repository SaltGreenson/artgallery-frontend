import React from "react";
import { NextPageContext } from "next";

const Home = () => <></>;

export async function getServerSideProps(context: NextPageContext) {
  return {
    redirect: {
      destination: "/gallery",
      permanent: false,
    },
  };
}

export default Home;
