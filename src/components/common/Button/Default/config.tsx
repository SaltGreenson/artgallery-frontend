import Preloader from "@/components/common/Preloader";
import Paragraph from "@/components/common/Paragraph";
import React, { ReactNode } from "react";
import { Colors } from "@/styles/colors";

export const defaultButtonDisplayStyle = (
  children: ReactNode,
  isFetching?: boolean,
  color: string = Colors.WHITE
) =>
  isFetching ? (
    <Preloader variant="default" dimension="30px" />
  ) : (
    <Paragraph color={color} bold>
      {children}
    </Paragraph>
  );
