import React from "react";
import renderer from "react-test-renderer";
import Button from "../Button";

test("it works", () => {
  const wrapper = renderer.create(<Button />);
  expect(wrapper).toMatchSnapshot();
});
