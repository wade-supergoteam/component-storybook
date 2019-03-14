import React from "react";
import renderer from "react-test-renderer";
import Card from "../";
import CardImage from "../CardImage";

test("create card", () => {
    const wrapper = renderer.create(<Card />);
    expect(wrapper).toMatchSnapshot();
});

test("With Image", () => {
    const wrapper = renderer.create(<CardImage />);
    expect(wrapper).toMatchSnapshot();
});

test("Card with Header", () => {
    const wrapper = renderer.create(<Card.Header />);
    expect(wrapper).toMatchSnapshot();
});

test("Card with Header", () => {
    const wrapper = renderer.create(<Card.Footer />);
    expect(wrapper).toMatchSnapshot();
});
