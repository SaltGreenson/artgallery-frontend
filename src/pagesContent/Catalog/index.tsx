import React from "react";
import MainLayout from "@/components/layouts/Main";
import Card from "@/components/elements/Card";
import { FlexBlock } from "@/components/common/Block";
import Title from "@/components/common/Title";
import {
  CatalogContentContainer,
  CatalogTitleContainer,
} from "@/pagesContent/Catalog/styles";

const Catalog = () => (
  <MainLayout>
    <CatalogContentContainer>
      <CatalogTitleContainer>
        <Title variant="large">Search board</Title>
      </CatalogTitleContainer>
      <FlexBlock
        width="100%"
        align="center"
        justify="center"
        gap="20px"
        direction="column"
      >
        <Card />
      </FlexBlock>
    </CatalogContentContainer>
  </MainLayout>
);

export default Catalog;
