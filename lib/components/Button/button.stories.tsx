import React from "react";
import { Story, Meta } from "@storybook/react";
import { Button } from ".";

export default {
  title: "Button",
  component: Button,
} as Meta;

const ButtonStory: Story<{}> = (args: any) => <Button {...args} />;

export const Primary = ButtonStory.bind({});
Primary.args = {};
