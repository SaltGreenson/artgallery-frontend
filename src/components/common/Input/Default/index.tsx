import React, { InputHTMLAttributes, useEffect, useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { withLabels } from "@/utils/hocs";

import { RelativeBlock } from "../../Block";

import { InputStyled, PasswordTitle } from "./styles";

export interface IDefaultInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label: string;
  register?: UseFormRegisterReturn<string>;
}

const CustomInput = ({
  error,
  register,
  type,
  ...inputProps
}: IDefaultInputProps): JSX.Element => {
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
    <RelativeBlock>
      <InputStyled
        error={error}
        type={inputType}
        initialType={type}
        {...register}
        {...inputProps}
      />
      {type === "password" && (
        <PasswordTitle onClick={handleOnClick()}>{passwordText}</PasswordTitle>
      )}
    </RelativeBlock>
  );
};

export default withLabels(CustomInput);
