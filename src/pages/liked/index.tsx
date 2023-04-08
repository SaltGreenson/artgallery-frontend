import React from "react";

import dynamic from "next/dynamic";
import Preloader from "@/components/common/Preloader";
import MainLayout from "@/components/layouts/Main";
import GalleryViewLayout from "@/components/layouts/Gallery";

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

export default Liked;
