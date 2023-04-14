import React, { ReactNode } from "react";
import { Colors } from "@/styles/colors";
import Paragraph from "@/components/common/Paragraph";
import {
  StyledDefaultButton,
  StyledButtonProps,
} from "@/components/common/Button/Default/styles";

export interface IDefaultButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  color?: Colors.WHITE | Colors.BLACK | string;
  isFetching?: boolean;
}

const DefaultButton = ({
  children,
  color,
  isFetching,
  ...props
}: IDefaultButtonProps & StyledButtonProps) => (
  <StyledDefaultButton {...props} disabled={isFetching}>
    <Paragraph fontSize="15px" color={color} bold>
      {children}
    </Paragraph>
  </StyledDefaultButton>
);

export default DefaultButton;
