import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";
import Menu from "@/components/elements/Menu";

export default {
  title: "Elements/Menu",
  component: Menu,
  argTypes: {},
} as ComponentMeta<typeof Menu>;

const TemplateHomePage: ComponentStory<typeof Menu> = () => <Menu />;

export const _Menu = TemplateHomePage.bind({});
_Menu.args = {};
