import React, { FC, useMemo } from "react";
import CustomLabel from "@/components/common/Label";
import { ILabelConfig } from "@/components/common/Label/config";

type LabelType = {
  error?: string;
  label: string;
};

function withLabels<T>(Component: FC<T>) {
  return function _(
    props: T & {
      isPreventDefault?: boolean;
      fontSize?: "12px" | "14px" | "16px" | string;
    } & {
      error?: string;
      label: string;
    }
  ) {
    const { label, error, fontSize, isPreventDefault } = useMemo(
      () => props,
      [props]
    );
    return (
      <CustomLabel
        variant="default"
        fontSize={fontSize}
        isPreventDefault={isPreventDefault}
      >
        {label}
        <Component {...(props as T & ILabelConfig & LabelType)} />
        {error && (
          <CustomLabel variant="error" fontSize={fontSize}>
            {error}
          </CustomLabel>
        )}
      </CustomLabel>
    );
  };
}

export default withLabels;
