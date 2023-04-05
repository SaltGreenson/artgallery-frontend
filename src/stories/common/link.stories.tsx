import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";
import CustomLink from "@/components/common/CustomLink";

export default {
  title: "Common/Link",
  component: CustomLink,
  argTypes: {
    children: {
      type: "string",
      defaultValue: "here",
    },
    href: {
      type: "string",
      defaultValue: "#",
    },
  },
} as ComponentMeta<typeof CustomLink>;

const TemplateHomePage: ComponentStory<typeof CustomLink> = (args) => (
  <CustomLink {...args} />
);

export const _Link = TemplateHomePage.bind({});
_Link.args = {
  children: "here",
  href: "#",
};
