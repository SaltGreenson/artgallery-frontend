import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";
import Card from "@/components/elements/Card";

export default {
  title: "Elements/Card",
  component: Card,
  argTypes: {},
} as ComponentMeta<typeof Card>;

const TemplateHomePage: ComponentStory<typeof Card> = () => <Card />;

export const _Card = TemplateHomePage.bind({});
_Card.args = {};
