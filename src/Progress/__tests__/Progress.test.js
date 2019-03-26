import React from "react";
import renderer from "react-test-renderer";
import Progress from "../";

test("Basic Progress", () => {
    const wrapper = renderer.create(<Progress  />);
    expect(wrapper).toMatchSnapshot();
});

