import React from "react";

import dynamic from "next/dynamic";
import Preloader from "@/components/common/Preloader";
import MainLayout from "@/components/layouts/Main";
import GalleryViewLayout from "@/components/layouts/Gallery";
import { parseCookies } from "nookies";
import { NextPageContext } from "next";
import axios from "axios";

const DynamicLikedContent = dynamic(() => import("../../pagesContent/Liked"), {
  loading: () => (
    <GalleryViewLayout title="Liked">
      <Preloader variant="card" />
    </GalleryViewLayout>
  ),
});

const Liked = () => (
  <MainLayout>
    <DynamicLikedContent />
  </MainLayout>
);

export async function getServerSideProps(context: NextPageContext) {
  const cookies = parseCookies(context);
  const token = cookies.accessToken;

  if (!token) {
    return {
      redirect: {
        destination: "/log-in",
        permanent: false,
      },
    };
  }

  try {
    const response = await axios.get(
      "http://localhost:5000/api/users/liked-posts",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response.data);

    return {
      props: {
        posts: response.data,
      },
    };
  } catch (error) {
    return {
      props: {
        posts: [],
      },
    };
  }
}

export default Liked;
