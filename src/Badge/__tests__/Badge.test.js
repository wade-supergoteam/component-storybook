import React from "react";
import renderer from "react-test-renderer";
import Badge from "../";

test("it works", () => {
    const wrapper = renderer.create(<Badge />);
    expect(wrapper).toMatchSnapshot();
});

test("Link Badges", () => {
    const wrapper = renderer.create(<Badge Link />);
    expect(wrapper).toMatchSnapshot();
});

test("Pill Badges", () => {
    const wrapper = renderer.create(<Badge pill />);

    expect(wrapper).toMatchSnapshot();
});
