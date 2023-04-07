import React, { ReactNode } from "react";

import Paragraph from "@/components/common/Paragraph";
import { Colors } from "@/styles/colors";

import { buttonSizesConfig } from "./config";
import {
  PrimaryProps,
  StyledIconButton,
  StyledOutlinedButton,
  StyledPrimaryButton,
  StyledSecondaryButton,
  StyledTextButton,
} from "./styles";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  color?: Colors.WHITE | Colors.BLACK | string;
  variant: "primary" | "secondary" | "outlined" | "icon" | "text";
  size?: "small" | "medium" | "large";
  height?: string;
  isFetching?: boolean;
}

const CustomButton = ({
  children,
  color = Colors.WHITE,
  size,
  variant,
  isFetching,
  ...props
}: IButtonProps & PrimaryProps): JSX.Element =>
  variant === "primary" ? (
    <StyledPrimaryButton
      width={buttonSizesConfig[size ?? "medium"].width}
      {...props}
      disabled={isFetching}
    >
      <Paragraph fontSize="15px" color={color} margin="0" bold>
        {children}
      </Paragraph>
    </StyledPrimaryButton>
  ) : variant === "secondary" ? (
    <StyledSecondaryButton
      width={buttonSizesConfig[size ?? "medium"].width}
      {...props}
    >
      <Paragraph fontSize="15px" color={Colors.DARK_BLUE} margin="0" bold>
        {children}
      </Paragraph>
    </StyledSecondaryButton>
  ) : variant === "outlined" ? (
    <StyledOutlinedButton
      width={buttonSizesConfig[size ?? "medium"].width}
      {...props}
    >
      <Paragraph fontSize="15px" color={Colors.DARK_BLUE} margin="0" bold>
        {children}
      </Paragraph>
    </StyledOutlinedButton>
  ) : variant === "icon" ? (
    <StyledIconButton
      width={buttonSizesConfig[size ?? "medium"].width}
      {...props}
    >
      {children}
    </StyledIconButton>
  ) : (
    <StyledTextButton {...props}>
      <Paragraph fontSize="14px" color={Colors.DARK_BLUE} margin="0">
        {children}
      </Paragraph>
    </StyledTextButton>
  );

export default CustomButton;
