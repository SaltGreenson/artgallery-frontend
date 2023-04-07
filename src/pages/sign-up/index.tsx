import React from "react";

import dynamic from "next/dynamic";
import Preloader from "@/components/common/Preloader/Default";

const DynamicSignUnContent = dynamic(
  () => import("../../pagesContent/SignUp"),
  {
    loading: Preloader,
  }
);

const SignUp = () => <DynamicSignUnContent />;

export default SignUp;
