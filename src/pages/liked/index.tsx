import React from "react";

import dynamic from "next/dynamic";
import Preloader from "@/components/common/Preloader";
import MainLayout from "@/components/layouts/Main";
import GalleryView from "@/components/layouts/Gallery";

const DynamicLikedContent = dynamic(() => import("../../pagesContent/Liked"), {
  loading: () => (
    <GalleryView title="Liked">
      <Preloader variant="card" />
    </GalleryView>
  ),
});

const Liked = () => (
  <MainLayout>
    <DynamicLikedContent />
  </MainLayout>
);

export default Liked;
