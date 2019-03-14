import React from "react";
import renderer from "react-test-renderer";
import Alert from "../";

test("it works", () => {
    const wrapper = renderer.create(<Alert />);
    expect(wrapper).toMatchSnapshot();
});
