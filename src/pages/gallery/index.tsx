import React from "react";

import dynamic from "next/dynamic";
import Preloader from "@/components/common/Preloader";
import MainLayout from "@/components/layouts/Main";
import GalleryView from "@/components/layouts/Gallery";

const DynamicGalleryContent = dynamic(
  () => import("../../pagesContent/Gallery"),
  {
    loading: () => (
      <GalleryView title="Gallery">
        <Preloader variant="card" />
      </GalleryView>
    ),
  }
);

const Gallery = () => (
  <MainLayout>
    <DynamicGalleryContent />
  </MainLayout>
);

export default Gallery;
