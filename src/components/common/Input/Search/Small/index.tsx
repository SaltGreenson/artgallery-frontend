import React, {
  ChangeEvent,
  InputHTMLAttributes,
  useCallback,
  useState,
} from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { StyledSmallSearchInput } from "./styles";

export interface IInputSmallSearchProps
  extends InputHTMLAttributes<HTMLInputElement> {
  register?: UseFormRegisterReturn<string>;
  error?: string;
}

const SmallSearch = ({
  register,
  defaultValue,
  ...props
}: IInputSmallSearchProps): JSX.Element => {
  const [value, setValue] = useState<string>((defaultValue as string) || "");

  const onChangeHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      register?.onChange(e);
      const value = e.currentTarget.value;
      setValue(value);
    },
    [register]
  );

  return (
    <StyledSmallSearchInput
      {...register}
      {...props}
      onChange={onChangeHandler.bind(this)}
      textIsPresent={!!value.length}
    />
  );
};

export default SmallSearch;
