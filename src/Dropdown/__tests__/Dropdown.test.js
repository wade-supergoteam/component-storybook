import "jest-styled-components";
import React from "react";
import renderer from "react-test-renderer";
import Dropdown from "..";
import DropdownItem from "../DropdownItem";

test("create dropdown", () => {
  const wrapper = renderer.create(<Dropdown />);
  expect(wrapper).toMatchSnapshot();
});

test("disabled isOpen", () => {
  const wrapper = renderer.create(<Dropdown isOpen />);
  expect(wrapper).toMatchSnapshot();
});

test("dropdown isOpen flase", () => {
  const wrapper = renderer.create(<Dropdown isOpen={false} />);
  expect(wrapper).toMatchSnapshot();
});

test("dropdown with dropdownMenu left", () => {
  const wrapper = renderer.create(<Dropdown align="left" />);
  expect(wrapper).toMatchSnapshot();
});

test("dropdown with dropdownMenu right", () => {
  const wrapper = renderer.create(<Dropdown isOpen align="right" />);
  expect(wrapper).toMatchSnapshot();
  // const wrapper = renderer.create(<Dropdown><DropdownMenu /></Dropdown>).toJSON()
  // expect(wrapper).toHaveStyleRule('align', 'right');
});

test("active Dropdown", () => {
  const wrapper = renderer.create(<DropdownItem active />);
  expect(wrapper).toMatchSnapshot();
});

test("disabled Dropdown", () => {
  const wrapper = renderer.create(<DropdownItem disabled />);
  expect(wrapper).toMatchSnapshot();
});
