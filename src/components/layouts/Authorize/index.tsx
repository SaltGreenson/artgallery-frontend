import React, { ReactNode } from "react";
import { Content, Layout } from "./styles";
import { AbsoluteBlock, FlexBlock } from "@/components/common/Block";
import Logo from "@/components/common/Sign/Logo";
import { LimitContent } from "@/components/common/LimitContent/styles";
import Paragraph from "@/components/common/Paragraph";
import { Colors } from "@/styles/colors";

type AuthorizeProps = {
  children: ReactNode;
};
const AuthorizeLayout = ({ children }: AuthorizeProps): JSX.Element => (
  <LimitContent maxWidth="1200px">
    <Layout>
      <AbsoluteBlock top="50px" left="2%">
        <FlexBlock align="center" gap="20px">
          <Logo />
          <FlexBlock>
            <Paragraph
              variant="default"
              dimension="large"
              color={Colors.PURPLE}
              bold
            >
              BREENKY
            </Paragraph>
          </FlexBlock>
        </FlexBlock>
      </AbsoluteBlock>
      <Content>{children}</Content>
    </Layout>
  </LimitContent>
);

export default AuthorizeLayout;
