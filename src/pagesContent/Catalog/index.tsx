import React from "react";
import MainLayout from "@/components/layouts/Main";
import Card from "@/components/elements/Card";
import { CustomBlock, FlexBlock } from "@/components/common/Block";
import Title from "@/components/common/Title";

const Catalog = () => (
  <MainLayout>
    <CustomBlock>
      <Title variant="large">Search board</Title>
    </CustomBlock>
    <FlexBlock
      width="100%"
      align="center"
      justify="center"
      gap="20px"
      direction="column"
    >
      <Card />
    </FlexBlock>
  </MainLayout>
);

export default Catalog;
