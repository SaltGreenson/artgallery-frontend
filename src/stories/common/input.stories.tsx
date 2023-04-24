import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";
import CustomInput from "@/components/common/Input";

export default {
  title: "Common/Input",
  component: CustomInput,
  argTypes: {
    variant: {
      type: "string",
      options: ["checkbox", "default", "dynamicLabel", "search"],
      control: { type: "radio" },
      defaultValue: "default",
    },
    dimension: {
      type: "string",
      defaultValue: "small",
      options: ["small", "large"],
      control: { type: "radio" },
    },
    error: {
      type: "string",
    },
    label: {
      type: "string",
      defaultValue: "First name",
    },
    type: {
      type: "string",
      options: ["text", "password"],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof CustomInput>;

const TemplateHomePage: ComponentStory<typeof CustomInput> = (args) => (
  <CustomInput {...args} />
);

export const _Input = TemplateHomePage.bind({});
_Input.args = {
  label: "First name",
  variant: "default",
};
