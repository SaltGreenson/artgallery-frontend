import React, { ReactNode } from "react";
import Title from "@/components/common/Title";
import { FlexBlock } from "@/components/common/Block";
import {
  CatalogViewContainer,
  CatalogViewTitleContainer,
} from "@/components/layouts/Gallery/styles";

interface GalleryViewProps {
  children: ReactNode;
  title: string;
}

const GalleryViewLayout = ({
  children,
  title,
}: GalleryViewProps): JSX.Element => (
  <CatalogViewContainer>
    <CatalogViewTitleContainer>
      <Title variant="large">{title}</Title>
    </CatalogViewTitleContainer>
    <FlexBlock
      width="100%"
      align="center"
      justify="center"
      gap="20px"
      flex={1}
      direction="column"
    >
      {children}
    </FlexBlock>
  </CatalogViewContainer>
);

export default GalleryViewLayout;
