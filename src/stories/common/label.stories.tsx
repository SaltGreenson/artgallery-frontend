import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";
import CustomLabel from "@/components/common/Label";

export default {
  title: "Common/Label",
  component: CustomLabel,
  argTypes: {
    children: {
      type: "string",
      defaultValue: "First name",
    },
    variant: {
      type: "string",
      defaultValue: "default",
      options: ["default", "error"],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof CustomLabel>;

const Template: ComponentStory<typeof CustomLabel> = (args) => (
  <CustomLabel {...args} />
);

export const _Label = Template.bind({});
_Label.args = {
  children: "First name",
  variant: "default",
};
