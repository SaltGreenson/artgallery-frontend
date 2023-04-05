import React from "react";

import AuthorizeLayout from "@/components/layouts/Authorize";
import { CustomBlock } from "@/components/common/Block";
import Title from "@/components/common/Title";
import LogInForm from "@/components/forms/LogIn";

const LogIn = () => (
  <AuthorizeLayout>
    <CustomBlock padding="0 0 32px 0">
      <Title variant="large">Log in</Title>
    </CustomBlock>
    <LogInForm />
  </AuthorizeLayout>
);

export default LogIn;
