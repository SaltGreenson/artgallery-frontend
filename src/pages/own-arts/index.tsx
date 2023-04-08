import React from "react";

import dynamic from "next/dynamic";
import Preloader from "@/components/common/Preloader";
import MainLayout from "@/components/layouts/Main";
import GalleryViewLayout from "@/components/layouts/Gallery";

const DynamicOwnArtsContent = dynamic(
  () => import("../../pagesContent/OwnArts"),
  {
    loading: () => (
      <GalleryViewLayout title="Own arts">
        <Preloader variant="card" />
      </GalleryViewLayout>
    ),
  }
);

const OwnArts = () => (
  <MainLayout>
    <DynamicOwnArtsContent />
  </MainLayout>
);

export default OwnArts;
