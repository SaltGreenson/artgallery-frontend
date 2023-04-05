import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";
import Footer from "@/components/elements/Footer";

export default {
  title: "Elements/Footer",
  component: Footer,
  argTypes: {},
} as ComponentMeta<typeof Footer>;

const TemplateHomePage: ComponentStory<typeof Footer> = () => <Footer />;

export const _Footer = TemplateHomePage.bind({});
_Footer.args = {};
