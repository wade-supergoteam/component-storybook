import "jest-styled-components";
import React from "react";
import renderer from "react-test-renderer";
import ListGroup from "../";
import ListGroupButton from "../ListGroupButton";
import ListGroupItem from "../ListGroupItem";
import ListGroupLink from "../ListGroupLink";
import { themeColorLevel } from "../../utils/color-functions";


test("Basic Example", () => {
  const wrapper = renderer.create(<ListGroup />);
  expect(wrapper).toMatchSnapshot();
});

test("ListGroupButton active", () => {
  const wrapper = renderer.create(<ListGroupButton active />);
  expect(wrapper).toMatchSnapshot();
});

test("ListGroupButton disabled", () => {
  const wrapper = renderer.create(<ListGroupButton disabled />);
  expect(wrapper).toMatchSnapshot();
});

test("ListGroupButton color", () => {
    const wrapper = renderer.create(<ListGroupButton color="primary" />);
    expect(wrapper).toMatchSnapshot();
});

test("ListGroupButton", () => {
    const wrapper = renderer.create(<ListGroupButton />).toJSON();
    expect(wrapper).toHaveStyleRule("color", "#495057");
    expect(wrapper).toHaveStyleRule("background-color", "#fff");

});

test("Flush List group", () => {
  const wrapper = renderer.create(<ListGroup flush />);
  expect(wrapper).toMatchSnapshot();
});

test("Disabled items", () => {
  const wrapper = renderer.create(<ListGroupItem disabled />);
  expect(wrapper).toMatchSnapshot();
});

test("Links", () => {
  const wrapper = renderer.create(<ListGroupLink href="#" />);
  expect(wrapper).toMatchSnapshot();
});
