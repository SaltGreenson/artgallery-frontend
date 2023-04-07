import React from "react";

import dynamic from "next/dynamic";
import Preloader from "@/components/common/Preloader";

const DynamicCatalogContent = dynamic(
  () => import("../../pagesContent/Catalog"),
  {
    loading: Preloader,
  }
);

const Catalog = () => <DynamicCatalogContent />;

export default Catalog;
