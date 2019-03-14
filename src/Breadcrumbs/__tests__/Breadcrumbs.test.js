import React from "react";
import renderer from "react-test-renderer";
import Breadcrumb from "../";

test("breadcrums is created", () => {
    const wrapper = renderer.create(<Breadcrumb />);
    expect(wrapper).toMatchSnapshot();
});

