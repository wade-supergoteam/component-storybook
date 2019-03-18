import React from "react";
import renderer from "react-test-renderer";
import Breadcrumb from "../";

test("Breadcrums is created", () => {
    const wrapper = renderer.create(<Breadcrumb />);
    expect(wrapper).toMatchSnapshot();
});

test("Breadcrums item", () => {
    const wrapper = renderer.create(<Breadcrumb.Item active />);
    expect(wrapper).toMatchSnapshot();
});
