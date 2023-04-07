import React from "react";

import dynamic from "next/dynamic";
import Preloader from "@/components/common/Preloader";
import MainLayout from "@/components/layouts/Main";
import GalleryView from "@/components/layouts/Gallery";

const DynamicOwnArtsContent = dynamic(
  () => import("../../pagesContent/OwnArts"),
  {
    loading: () => (
      <GalleryView title="Own arts">
        <Preloader variant="card" />
      </GalleryView>
    ),
  }
);

const OwnArts = () => (
  <MainLayout>
    <DynamicOwnArtsContent />
  </MainLayout>
);

export default OwnArts;
