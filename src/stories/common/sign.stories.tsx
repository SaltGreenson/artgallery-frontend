import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";
import Sign from "@/components/common/Sign";

export default {
  title: "Common/Sign",
  component: Sign,
  argTypes: {
    variant: {
      type: "string",
      defaultValue: "dress",
      options: ["dress", "heart", "logo"],
      control: { type: "radio" },
    },
    color: {
      type: "string",
    },
    fontSize: {
      type: "string",
    },
    inFavourites: {
      type: "boolean",
    },
  },
} as ComponentMeta<typeof Sign>;

const Template: ComponentStory<typeof Sign> = (args) => <Sign {...args} />;

export const _Sign = Template.bind({});
_Sign.args = {
  variant: "dress",
  inFavourites: false,
};
