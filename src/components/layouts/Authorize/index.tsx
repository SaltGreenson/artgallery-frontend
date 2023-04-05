import React, { ReactNode } from "react";
import { Content, Layout } from "./styles";
import { AbsoluteBlock } from "@/components/common/Block";
import Logo from "@/components/common/Sign/Logo";
import { LimitContent } from "@/components/common/LimitContent/styles";

type AuthorizeProps = {
  children: ReactNode;
};
const AuthorizeLayout = ({ children }: AuthorizeProps): JSX.Element => (
  <LimitContent maxWidth="1200px">
    <Layout>
      <AbsoluteBlock top="50px" left="2%">
        <Logo />
      </AbsoluteBlock>
      <Content>{children}</Content>
    </Layout>
  </LimitContent>
);

export default AuthorizeLayout;
