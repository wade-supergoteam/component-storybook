import React from "react";
import renderer from "react-test-renderer";
import Collapse from "../";

test("it works", () => {
    const wrapper = renderer.create(<Collapse />);
    expect(wrapper).toMatchSnapshot();
});
