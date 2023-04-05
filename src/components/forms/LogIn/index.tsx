import React from "react";
import { useForm } from "react-hook-form";

import CustomInput from "@/components/common/Input";
import { FlexBlock } from "@/components/common/Block";
import CustomButton from "@/components/common/Button";
import Paragraph from "@/components/common/Paragraph";
import CustomLink from "src/components/common/Link";

const LogInForm = (): JSX.Element => {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm();

  return (
    <>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <FlexBlock direction="column" gap="20px" width="100%">
          <CustomInput
            variant="default"
            label="Email"
            register={register("email", {
              required: {
                value: true,
                message: "Поле Email должно быть заполнено",
              },
            })}
            error={errors.email && String(errors.email.message)}
          />

          <FlexBlock direction="column" gap="8px" width="100%">
            <CustomInput
              variant="default"
              label="Пароль"
              type="password"
              register={register("password", {
                required: {
                  value: true,
                  message: "Поле Пароль должно быть заполнено",
                },
              })}
              error={errors.password && String(errors.password.message)}
            />
            <CustomLink href="/password-recovery">Забыли пароль?</CustomLink>
          </FlexBlock>

          <CustomButton type="submit" variant="primary" size="large">
            Войти
          </CustomButton>

          <FlexBlock gap="5px">
            <Paragraph>Нету аккаунта?</Paragraph>
            <CustomLink href="/sign-up">Регистрация</CustomLink>
          </FlexBlock>
        </FlexBlock>
      </form>
    </>
  );
};

export default LogInForm;
