import React from "react";

import dynamic from "next/dynamic";
import Preloader from "@/components/common/Preloader/Default";

const DynamicLogInContent = dynamic(() => import("../../pagesContent/LogIn"), {
  loading: Preloader,
});

const LogIn = () => <DynamicLogInContent />;

export default LogIn;
