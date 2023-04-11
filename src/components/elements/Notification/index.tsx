import React, { HTMLAttributes, useCallback, useEffect, useState } from "react";
import {
  StyledNotificationBar,
  StyledNotificationContainer,
  StyledNotificationCrossContainer,
  StyledNotificationMessageContainer,
} from "@/components/elements/Notification/styles";
import Paragraph from "@/components/common/Paragraph";
import {
  notificationBarColorConfig,
  notificationIconConfig,
  notificationTitleColorConfig,
  notificationTitleConfig,
} from "@/components/elements/Notification/config";
import { FlexBlock } from "@/components/common/Block";
import { RxCross2 } from "react-icons/rx";
import { Colors } from "@/styles/colors";

interface NotificationProps extends HTMLAttributes<HTMLDivElement> {
  variant: "info" | "error";
  message: string;
  clearMessage: () => void;
}

const Notification = ({
  variant,
  message,
  clearMessage,
}: NotificationProps): JSX.Element => {
  const [isActive, setActive] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setActive(false);
      clearMessage();
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [setActive]);

  const onClickHandler = useCallback(
    () => () => {
      setActive(false);
    },
    [setActive]
  );

  return (
    <StyledNotificationContainer isActive={isActive}>
      <StyledNotificationCrossContainer>
        <RxCross2 color={Colors.LIGHT_BLACK} onClick={onClickHandler()} />
      </StyledNotificationCrossContainer>
      <FlexBlock gap="10px" align="center" padding="0 0 0 6px">
        {notificationIconConfig[variant]}
        <Paragraph color={notificationTitleColorConfig[variant]} bold>
          {notificationTitleConfig[variant]}
        </Paragraph>
      </FlexBlock>

      <StyledNotificationMessageContainer>
        <Paragraph margin="0" lineHeight="17px">
          {message}
        </Paragraph>
      </StyledNotificationMessageContainer>
      <StyledNotificationBar color={notificationBarColorConfig[variant]} />
    </StyledNotificationContainer>
  );
};

export default Notification;
