import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";
import CustomImage from "@/components/common/Img";

export default {
  title: "Common/Image",
  component: CustomImage,
  argTypes: {
    height: {
      type: "string",
    },
    needDisplay: {
      type: "boolean",
      defaultValue: false,
    },
    dimension: {
      type: "string",
      defaultValue: "small",
      options: ["small", "medium"],
      control: { type: "radio" },
    },
    src: {
      type: "string",
      defaultValue: "/image.png",
    },
    width: {
      type: "string",
    },
  },
} as ComponentMeta<typeof CustomImage>;

const Template: ComponentStory<typeof CustomImage> = (args) => (
  <CustomImage {...args} />
);

export const _Image = Template.bind({});
_Image.args = {
  src: "/image.png",
  needDisplay: false,
  dimension: "small",
};
