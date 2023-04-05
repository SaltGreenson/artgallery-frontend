import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";
import Title from "@/components/common/Title";

export default {
  title: "Common/Title",
  component: Title,
  argTypes: {
    children: {
      type: "string",
      defaultValue: "Account",
    },
    fontSize: {
      type: "string",
    },
    variant: {
      type: "string",
      defaultValue: "large",
      options: ["small", "medium", "large", "thin"],
      control: {
        type: "radio",
      },
    },
  },
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const _Title = Template.bind({});
_Title.args = {
  children: "Account",
  variant: "small",
};
