import React, { InputHTMLAttributes, useEffect, useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

import { RelativeBlock } from "../../Block";
import CustomLabel from "../../Label";

import { InputStyled, PasswordTitle } from "./styles";

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label: string;
  register?: UseFormRegisterReturn<string>;
}

const CustomInput = ({
  error,
  label,
  register,
  type,
  ...inputProps
}: CustomInputProps): JSX.Element => {
  const [clicked, setClicked] = useState(false);
  const [passwordText, setPasswordText] = useState("Show");
  const [inputType, setInputType] = useState(type || "text");

  useEffect(() => {
    setPasswordText(clicked ? "Hide" : "Show");

    if (type === "password") {
      setInputType(clicked ? "text" : "password");
    }
  }, [clicked, type]);

  const handleOnClick = () => () => {
    setClicked((prev) => !prev);
  };

  return (
    <CustomLabel error={error}>
      {label}
      <RelativeBlock>
        <InputStyled
          error={error}
          type={inputType}
          initialType={type}
          {...register}
          {...inputProps}
        />
        {type === "password" && (
          <PasswordTitle onClick={handleOnClick()}>
            {passwordText}
          </PasswordTitle>
        )}
      </RelativeBlock>
      {error && <CustomLabel variant="error">{error}</CustomLabel>}
    </CustomLabel>
  );
};

export default CustomInput;
