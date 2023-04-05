import React from "react";

import { CustomBlock, FlexBlock } from "@/components/common/Block";
import Paragraph from "@/components/common/Paragraph";
import CustomLink from "src/components/common/Link";
import CustomTitle from "@/components/common/Title";
import { LimitContent } from "@/components/common/LimitContent";

import {
  generalLinks,
  getToKnowUsLinks,
} from "@/components/elements/Footer/config";

import { Colors } from "@/styles/colors";
import { StyledFooter, StyledFooterContentContainer } from "./styles";

const Footer = () => (
  <StyledFooter>
    <LimitContent maxWidth="1600px">
      <StyledFooterContentContainer>
        <FlexBlock direction="column" gap="48px" justify="space-between">
          <FlexBlock gap="16px" direction="column">
            <CustomTitle variant="small" color={Colors.WHITE}>
              Познакомьтесь с нами поближе
            </CustomTitle>
            {getToKnowUsLinks &&
              getToKnowUsLinks.map((link) => (
                <CustomLink
                  key={link.title}
                  href={link.href}
                  color={Colors.MEDIUM_GREY}
                  hoverColor={Colors.WHITE}
                  fontSize="14px"
                  bold
                >
                  {link.title}
                </CustomLink>
              ))}
          </FlexBlock>
          <CustomBlock padding="0 0 48px 0">
            <FlexBlock
              gap="24px"
              align="center"
              flexWrap="wrap"
              direction="row"
            >
              <Paragraph color={Colors.MEDIUM_GREY} fontSize="14px" bold>
                © 2023 BREENKY
              </Paragraph>
              {generalLinks &&
                generalLinks.map((link) => (
                  <CustomLink
                    key={link.title}
                    href={link.href}
                    color={Colors.MEDIUM_GREY}
                    hoverColor={Colors.WHITE}
                    fontSize="14px"
                    bold
                  >
                    {link.title}
                  </CustomLink>
                ))}
            </FlexBlock>
          </CustomBlock>
        </FlexBlock>
      </StyledFooterContentContainer>
    </LimitContent>
  </StyledFooter>
);

export default Footer;
