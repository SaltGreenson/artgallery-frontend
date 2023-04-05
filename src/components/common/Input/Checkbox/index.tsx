import React, { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

import { CustomBlock, FlexBlock, RelativeBlock } from "../../Block";
import CustomLabel from "../../Label";

import { GeekMark, StyledCheckbox } from "./styles";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  register?: UseFormRegisterReturn<string>;
}

const Index = ({
  error,
  label,
  register,
  ...props
}: CheckboxProps): JSX.Element => (
  <CustomBlock>
    <FlexBlock align="center" margin="0 0 8px 0">
      <RelativeBlock maxHeight="25px" width="25px">
        <StyledCheckbox type="checkbox" {...register} {...props} />
        <GeekMark error={error} />
      </RelativeBlock>
      <CustomLabel variant="default" margin="0 0 0 8px">
        {label}
      </CustomLabel>
    </FlexBlock>
    {error && <CustomLabel variant="error">{error}</CustomLabel>}
  </CustomBlock>
);

export default Index;
