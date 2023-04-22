import React, {
  ChangeEvent,
  InputHTMLAttributes,
  useCallback,
  useState,
} from "react";
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
  maxLength,
  ...props
}: IInputWithDynamicLabelProps): JSX.Element => {
  const [value, setValue] = useState<string>((defaultValue as string) || "");
  const [leftPosition] = useState(
    `-${label.length - calculatePercents(label.length, 20)}px`
  );
  const onChangeHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      register?.onChange(e);
      const value = e.currentTarget.value;
      setValue(value);
    },
    [register]
  );

  return (
    <FlexBlock gap="3px" direction="column">
      <RelativeBlock width="100%">
        <StyledInputWDLInput
          type="text"
          value={value}
          error={error}
          maxLength={maxLength}
          leftPosition={leftPosition}
          {...register}
          {...props}
          onChange={onChangeHandler.bind(this)}
        />
        <StyledInputWDLabel leftPosition={leftPosition} text={value}>
          {label}
        </StyledInputWDLabel>
      </RelativeBlock>
      <FlexBlock justify="space-between">
        {required && (
          <Paragraph
            dimension="small"
            color={error ? Colors.RED : Colors.LIGHT_BLACK}
          >
            required
          </Paragraph>
        )}
        {maxLength && (
          <Paragraph
            dimension="small"
            color={error ? Colors.RED : Colors.LIGHT_BLACK}
          >
            {value.length}/{maxLength}
          </Paragraph>
        )}
      </FlexBlock>
    </FlexBlock>
  );
};

export default InputWithDynamicLabel;
