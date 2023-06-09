import React from "react";

import { FlexBlock } from "@/components/common/Block";
import CustomInput from "@/components/common/Input";
import CustomButton from "@/components/common/Button";
import Paragraph from "@/components/common/Paragraph";
import CustomLink from "@/components/common/Link";
import { FieldValues, useForm } from "react-hook-form";

interface SignUpFormProps {
  onSubmitHandler: (data: FieldValues) => void;
}

const SignUpForm = ({ onSubmitHandler }: SignUpFormProps): JSX.Element => {
  const {
    formState: { errors },
    register,
    handleSubmit,
    getValues,
  } = useForm();
  const validatePasswordRepeat = (value: string) => {
    const { password } = getValues();
    return value === password || "Passwords don't match";
  };

  return (
    <form onSubmit={handleSubmit((data) => onSubmitHandler(data))}>
      <FlexBlock direction="column" gap="20px">
        <CustomInput
          variant="default"
          label="Name"
          register={register("name", {
            required: {
              value: true,
              message: "The Name field must be filled in",
            },
            minLength: {
              value: 3,
              message: "The field cannot contain less than 3 characters",
            },
            maxLength: {
              value: 20,
              message: "The field cannot contain more than 20 characters",
            },
          })}
          error={errors.name && String(errors.name.message)}
        />

        <CustomInput
          variant="default"
          label="Email"
          register={register("email", {
            required: {
              value: true,
              message: "The Email field must be filled in",
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
              message: "The Password field must be filled in",
            },
            minLength: {
              value: 3,
              message: "The field cannot contain less than 3 characters",
            },
            maxLength: {
              value: 20,
              message: "The field cannot contain more than 20 characters",
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
              message: "The field must be filled in",
            },
            minLength: {
              value: 3,
              message: "The field cannot contain less than 3 characters",
            },
            maxLength: {
              value: 20,
              message: "The field cannot contain more than 20 characters",
            },
            validate: validatePasswordRepeat,
          })}
          error={errors.repeatPassword && String(errors.repeatPassword.message)}
        />

        <CustomButton variant="default" type="submit">
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
