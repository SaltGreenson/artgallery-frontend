import React from "react";

import AuthorizeLayout from "@/components/layouts/Authorize";
import { CustomBlock } from "@/components/common/Block";
import Title from "@/components/common/Title";
import SignUpForm from "@/components/forms/SignUp";

const SignUp = () => (
  <AuthorizeLayout>
    <CustomBlock margin="0 0 32px 0">
      <Title variant="large">Sign up</Title>
    </CustomBlock>
    <SignUpForm />
  </AuthorizeLayout>
);

export default SignUp;
