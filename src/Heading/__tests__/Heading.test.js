import "jest-styled-components";
import React from "react";
import renderer from "react-test-renderer";
import Heading from "..";

test("Create H1 Default", () => {
  const wrapper = renderer.create(<Heading as="h1" />);
  expect(wrapper).toMatchSnapshot();
});

test("Create H1 With sizes, size H6", () => {
  const wrapper = renderer.create(<Heading as="h1" size="h6" />);
  expect(wrapper).toMatchSnapshot();
});

test("Create h2 with sizes, size h5", () => {
  const wrapper = renderer.create(<Heading as="h2" size="h5" />);
  expect(wrapper).toMatchSnapshot();
});

test("Create h3 with sizes, size H4", () => {
  const wrapper = renderer.create(<Heading as="h3" size="h4" />);
  expect(wrapper).toMatchSnapshot();
});

test("Create h4 with sizes, size H3", () => {
  const wrapper = renderer.create(<Heading as="h4" size="h3" />);
  expect(wrapper).toMatchSnapshot();
});

test("Create h5 with sizes, size H5", () => {
  const wrapper = renderer.create(<Heading as="h5" size="h2" />);
  expect(wrapper).toMatchSnapshot();
});

test("Create h6 with sizes, size H1", () => {
  const wrapper = renderer.create(<Heading as="h6" size="h6" />);
  expect(wrapper).toMatchSnapshot();
});

test("Create h6 with sizes, size H1", () => {
  const wrapper = renderer.create(
    <Heading as="h6" size="h6">
      With child element
    </Heading>,
  );
  expect(wrapper).toMatchSnapshot();
});
