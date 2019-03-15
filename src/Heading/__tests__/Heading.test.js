import React from "react";
import renderer from "react-test-renderer";
import Heading from "../";

test("Create H1 Default", () => {
    const wrapper = renderer.create(<Heading as="h1" />);
    expect(wrapper).toMatchSnapshot();
});

test("Create H1 With sizes, size H6", () => {
    const wrapper = renderer.create(<Heading as="h1" size="h6" />);
    expect(wrapper).toMatchSnapshot();
});

test("Create H1 with sizes, size H1", () => {
    const wrapper = renderer.create(<Heading as="h6" size="h1" />);
    expect(wrapper).toMatchSnapshot();
});

