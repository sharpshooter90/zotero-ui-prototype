import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import Button from "../components/Button";
import theme from "../theme";
import { Icon } from "@mdi/react";
import { mdiPlus } from "@mdi/js";
const ICONS = {
  mdiPlus,
};

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Button",
  component: Button,
  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
    },
    size: {
      options: ["xs", "sm", "md", "lg"],
      control: { type: "select" },
    },
    leftIcon: {
      control: {
        type: "select",
        options: Object.keys(ICONS),
      },
    },
    rightIcon: {
      control: {
        type: "select",
        options: Object.keys(ICONS),
      },
    },
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => {
  const leftIcon = ICONS[args.leftIcon];
  const rightIcon = ICONS[args.rightIcon];
  return (
    <ThemeProvider theme={theme}>
      <Button {...args} leftIcon={leftIcon} rightIcon={rightIcon}>
        Button
      </Button>
    </ThemeProvider>
  );
};
export const Primary = Template.bind({});
Primary.args = { variant: "primary", disabled: false, size: "md" };

export const Secondary = Template.bind({});
Secondary.args = { ...Primary.args, variant: "secondary" };
