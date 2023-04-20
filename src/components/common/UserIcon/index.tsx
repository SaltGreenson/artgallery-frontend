import React, { HTMLAttributes } from "react";
import Paragraph from "@/components/common/Paragraph";

import { Colors } from "@/styles/colors";
import { StyledUserIconContainer } from "@/components/common/UserIcon/styles";

interface UserIconProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
  isActive: boolean;
}

const UserIcon = ({ name, isActive, ...props }: UserIconProps): JSX.Element => (
  <StyledUserIconContainer isActive={isActive} {...props}>
    <Paragraph bold color={Colors.YELLOW}>
      {name[0].toLowerCase()}
    </Paragraph>
  </StyledUserIconContainer>
);

export default UserIcon;
