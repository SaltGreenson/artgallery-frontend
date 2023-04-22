import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";
import SkeletonCard from "@/components/common/Preloader/Skeleton";

export default {
  title: "Common/Skeleton",
  component: SkeletonCard,
  argTypes: {},
} as ComponentMeta<typeof SkeletonCard>;

const Template: ComponentStory<typeof SkeletonCard> = () => <SkeletonCard />;

export const _Skeleton = Template.bind({});
_Skeleton.args = {};
