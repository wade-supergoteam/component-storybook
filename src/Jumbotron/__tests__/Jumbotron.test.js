import React from "react";
import renderer from "react-test-renderer";
import Jumbotron from "../";

test("Create Default", () => {
    const wrapper = renderer.create(<Jumbotron />);
    expect(wrapper).toMatchSnapshot();
});

test("Fluid Jumbotron", () => {
    const wrapper = renderer.create(<Jumbotron fluid />);
    expect(wrapper).toMatchSnapshot();
});
