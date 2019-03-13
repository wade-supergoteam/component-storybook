import React from "react";
import renderer from "react-test-renderer";
import Breadcrumb from "../Breadcrumb";

test("breadcrums is created", () => {
    const wrapper = renderer.create(<Breadcrumb />);
    expect(wrapper).toMatchSnapshot();
});
test("create li element", () => {
    const wrapper = renderer.create(<Breadcrumb.Item />);
    expect(wrapper).toMatchSnapshot();
});
