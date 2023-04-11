import React, { useCallback } from "react";

import AuthorizeLayout from "@/components/layouts/Authorize";
import { CustomBlock } from "@/components/common/Block";
import Title from "@/components/common/Title";
import SignUpForm from "@/components/forms/SignUp";
import { FieldValues } from "react-hook-form";
import useActions from "@/utils/hooks/useActions";
import { useRouter } from "next/router";

const SignUp = () => {
  const { signup } = useActions();
  const router = useRouter();

  const onSubmitHandler = useCallback(
    (data: FieldValues) => {
      const { name, email, password } = data;
      signup(name, email, password, () => {
        void router.push("/gallery");
      });
    },
    [signup]
  );

  return (
    <AuthorizeLayout>
      <CustomBlock margin="0 0 32px 0">
        <Title variant="large">Sign up</Title>
      </CustomBlock>
      <SignUpForm onSubmitHandler={onSubmitHandler} />
    </AuthorizeLayout>
  );
};

export default SignUp;
