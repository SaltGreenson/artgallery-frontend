import React from "react";

import dynamic from "next/dynamic";
import Preloader from "@/components/common/Preloader";

const DynamicLogInContent = dynamic(() => import("../../pagesContent/LogIn"), {
  loading: () => <Preloader variant="default" />,
});

const LogIn = () => <DynamicLogInContent />;

export default LogIn;
