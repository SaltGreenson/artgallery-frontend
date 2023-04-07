import React from "react";
import MainLayout from "@/components/layouts/Main";
import Card from "@/components/elements/Card";
import { FlexBlock } from "@/components/common/Block";

const Catalog = () => (
  <MainLayout>
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
