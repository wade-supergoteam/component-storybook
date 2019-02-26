import React from "react";
import renderer from "react-test-renderer";
import Button from "../Button";

test("it works", () => {
  const wrapper = renderer.create(<Button />);
  expect(wrapper).toMatchSnapshot();
});

test("Outline variant", () => {
  const wrapper = renderer.create(<Button outline />);
  expect(wrapper).toMatchSnapshot();
});

test("Rounded variant", () => {
  const wrapper = renderer.create(<Button theme={{ enableRounded: true }} outline />);

  expect(wrapper).toMatchSnapshot();
});

test("Disable rounded variant", () => {
  const wrapper = renderer.create(<Button theme={{ enableRounded: false }} outline />);
  expect(wrapper).toMatchSnapshot();
});