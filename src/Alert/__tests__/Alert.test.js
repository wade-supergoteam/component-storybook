import React from "react";
import renderer from "react-test-renderer";
import Alert from "../Alert";

test("it works", () => {
    const wrapper = renderer.create(<Alert />);
    expect(wrapper).toMatchSnapshot();
});
