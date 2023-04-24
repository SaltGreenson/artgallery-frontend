import React, { useCallback } from "react";
import { FieldValues } from "react-hook-form";

import AuthorizeLayout from "@/components/layouts/Authorize";
import { CustomBlock } from "@/components/common/Block";
import Title from "@/components/common/Title";
import LogInForm from "@/components/forms/LogIn";
import useActions from "@/utils/hooks/useActions";
import { useRouter } from "next/router";

const LogIn = (): JSX.Element => {
  const { login } = useActions();
  const router = useRouter();

  const onSubmitHandler = useCallback(
    (data: FieldValues) => {
      const { email, password } = data;
      login(email, password, () => {
        void router.push("/gallery");
      });
    },
    [login]
  );

  return (
    <AuthorizeLayout>
      <CustomBlock padding="0 0 32px 0">
        <Title variant="large">Log in</Title>
      </CustomBlock>
      <LogInForm onSubmitHandler={onSubmitHandler} />
    </AuthorizeLayout>
  );
};

export default LogIn;
