import React, { InputHTMLAttributes, useCallback, useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

import { FlexBlock, RelativeBlock } from "@/components/common/Block";
import Paragraph from "@/components/common/Paragraph";

import { calculatePercents } from "@/utils/helpers/math.helper";

import { Colors } from "@/styles/colors";
import {
  StyledInputWDLabel,
  StyledInputWDLInput,
} from "@/components/common/Input/DynamicLabel/styles";

export interface IInputWithDynamicLabelProps
  extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label: string;
  register?: UseFormRegisterReturn<string>;
}

const InputWithDynamicLabel = ({
  defaultValue,
  error,
  label,
  required,
  register,
  ...props
}: IInputWithDynamicLabelProps): JSX.Element => {
  const [value, setValue] = useState<string>((defaultValue as string) || "");
  const [leftPosition] = useState(
    `-${label.length - calculatePercents(label.length, 20)}px`
  );
  const onChangeHandler = useCallback((value: string) => {
    setValue(value);
  }, []);

  return (
    <FlexBlock gap="3px" direction="column">
      <RelativeBlock width="100%">
        <StyledInputWDLInput
          type="text"
          value={value}
          error={error}
          leftPosition={leftPosition}
          {...register}
          {...props}
          onChange={(e) => {
            register && register.onChange(e);
            onChangeHandler(e.currentTarget.value);
          }}
        />
        <StyledInputWDLabel leftPosition={leftPosition} text={value}>
          {label}
        </StyledInputWDLabel>
      </RelativeBlock>
      {required && (
        <Paragraph
          dimension="small"
          color={error ? Colors.RED : Colors.LIGHT_BLACK}
        >
          required
        </Paragraph>
      )}
    </FlexBlock>
  );
};

export default InputWithDynamicLabel;
