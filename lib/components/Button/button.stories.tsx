import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Button } from ".";

interface ButtonProps {}

export default {
  title: "Button",
  component: Button,
} as Meta;

const ButtonStory: Story<ButtonProps> = (args: any) => <Button {...args} />;

export const Primary = ButtonStory.bind({});
Primary.args = {};
