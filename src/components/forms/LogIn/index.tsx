import React from "react";
import { FieldValues, useForm } from "react-hook-form";

import CustomInput from "@/components/common/Input";
import { FlexBlock } from "@/components/common/Block";
import CustomButton from "@/components/common/Button";
import Paragraph from "@/components/common/Paragraph";
import CustomLink from "src/components/common/Link";
import { StyledLogInForm } from "@/components/forms/LogIn/styles";

interface LogInFormProps {
  onSubmitHandler: (data: FieldValues) => void;
}

const LogInForm = ({ onSubmitHandler }: LogInFormProps): JSX.Element => {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm();

  return (
    <StyledLogInForm onSubmit={handleSubmit((data) => onSubmitHandler(data))}>
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
            label="Password"
            type="password"
            register={register("password", {
              required: {
                value: true,
                message: "Поле Пароль должно быть заполнено",
              },
            })}
            error={errors.password && String(errors.password.message)}
          />
          <CustomLink href="/password-recovery">
            Forgot your password?
          </CustomLink>
        </FlexBlock>

        <CustomButton type="submit" variant="primary" size="large">
          LOG IN
        </CustomButton>

        <FlexBlock gap="5px">
          <Paragraph>Don&lsquo;t have an account?</Paragraph>
          <CustomLink href="/sign-up">Sign up</CustomLink>
        </FlexBlock>
      </FlexBlock>
    </StyledLogInForm>
  );
};

export default LogInForm;
