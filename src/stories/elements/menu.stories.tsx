import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";
import Menu from "@/components/elements/Menu";
import { IAuthUser } from "@/models/IUser";

export default {
  title: "Elements/Menu",
  component: Menu,
  argTypes: {
    authUser: {
      type: "boolean",
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof Menu>;

const TemplateHomePage: ComponentStory<typeof Menu> = (args) => (
  <Menu {...args} />
);

export const _Menu = TemplateHomePage.bind({});
_Menu.args = {
  authUser: {} as IAuthUser,
};
