import React from "react";

import dynamic from "next/dynamic";
import Preloader from "@/components/common/Preloader";
import MainLayout from "@/components/layouts/Main";
import GalleryViewLayout from "@/components/layouts/Gallery";

const DynamicCreateContent = dynamic(
  () => import("../../pagesContent/Create"),
  {
    loading: () => (
      <GalleryViewLayout title="Create">
        <Preloader variant="card" />
      </GalleryViewLayout>
    ),
  }
);

const Create = () => (
  <MainLayout>
    <DynamicCreateContent />
  </MainLayout>
);

export default Create;
