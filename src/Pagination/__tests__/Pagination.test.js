import "jest-styled-components";
import React from "react";
import renderer from "react-test-renderer";
import Pagination from "..";
import PaginationItem from "../PaginationItem";

test("Default Pagination", () => {
  const wrapper = renderer.create(<Pagination />);
  expect(wrapper).toMatchSnapshot();
});
test("Pagination large", () => {
  const wrapper = renderer.create(<Pagination size="large" />);
  expect(wrapper).toMatchSnapshot();
});

test("Pagination large", () => {
  const wrapper = renderer.create(<Pagination size="small" />);
  expect(wrapper).toMatchSnapshot();
});

test("Create Pagination Item active", () => {
  const wrapper = renderer.create(<PaginationItem active />);
  expect(wrapper).toMatchSnapshot();
});

test("Create Pagination Item disabled", () => {
  const wrapper = renderer.create(<PaginationItem disabled />);
  expect(wrapper).toMatchSnapshot();
});
