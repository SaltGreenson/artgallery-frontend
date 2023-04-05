import React from "react";

import { FlexBlock } from "@/components/common/Block";
import CustomInput from "@/components/common/Input";
import CustomButton from "@/components/common/Button";
import Paragraph from "@/components/common/Paragraph";
import CustomLink from "@/components/common/Link";
import { useForm } from "react-hook-form";

const SignUpForm = (): JSX.Element => {
  const {
    formState: { errors },
    register,
    handleSubmit,
    getValues,
  } = useForm();
  const validatePasswordRepeat = (value: string) => {
    const { password } = getValues();
    return value === password || "Пароли не совпадают";
  };

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <FlexBlock direction="column" gap="20px">
        <CustomInput
          variant="default"
          label="Nickname"
          register={register("nickname", {
            required: {
              value: true,
              message: "Поле Nickname должно быть заполнено",
            },
            minLength: {
              value: 3,
              message: "Поле не может содержать менее 3-х символов",
            },
          })}
          error={errors.nickname && String(errors.nickname.message)}
        />

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

        <CustomInput
          variant="default"
          label="Password"
          type="password"
          register={register("password", {
            required: {
              value: true,
              message: "Поле Пароль должно быть заполнено",
            },
            minLength: {
              value: 3,
              message: "Поле не может содержать менее 3-х символов",
            },
          })}
          error={errors.password && String(errors.password.message)}
        />
        <CustomInput
          variant="default"
          label="Repeat password"
          type="password"
          register={register("repeatPassword", {
            required: {
              value: true,
              message: "Поле должно быть заполнено",
            },
            minLength: {
              value: 3,
              message: "Поле не может содержать менее 3-х символов",
            },
            validate: validatePasswordRepeat,
          })}
          error={errors.repeatPassword && String(errors.repeatPassword.message)}
        />

        <CustomButton variant="primary" size="large" type="submit">
          SIGN UP
        </CustomButton>

        <FlexBlock gap="5px">
          <Paragraph>Already registered?</Paragraph>
          <CustomLink href="/log-in">Log in</CustomLink>
        </FlexBlock>
      </FlexBlock>
    </form>
  );
};

export default SignUpForm;
