import React from "react";

import SmallSearch, {
  IInputSmallSearchProps,
} from "@/components/common/Input/Search/Small";
import LargeSearch, {
  IInputLargeSearchProps,
} from "@/components/common/Input/Search/Large";

export type InputSearchConfigType = IInputLargeSearchProps &
  IInputSmallSearchProps;

export const inputSearchConfig = ({ ...props }: InputSearchConfigType) => ({
  small: <SmallSearch {...props} />,
  large: <LargeSearch {...props} />,
});
