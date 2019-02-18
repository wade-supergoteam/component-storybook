import { withKnobs, select } from "@storybook/addon-knobs/react";
import { setOptions } from "@storybook/addon-options";
import { addDecorator, configure } from "@storybook/react";
import React from "react";
import { ThemeProvider } from "styled-components";
import * as defaultTheme from "../src/utils/defaultTheme";

const Themes = {
  default: {},
  defaultTheme: defaultTheme,
};

addDecorator(withKnobs);
addDecorator(story => {
  const content = story();
  return <ThemeProvider theme={select("Theme", Themes, Themes["default"])}>{content}</ThemeProvider>;
});

setOptions({
  name: "component-storybook",
  url: "https://gitlab.com/supergoteam/component-storybook",
});

const req = require.context("../src/", true, /.story.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
