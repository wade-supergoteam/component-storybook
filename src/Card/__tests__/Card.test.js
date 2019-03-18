import React from "react";
import renderer from "react-test-renderer";
import Card from "../";
import CardImage from "../CardImage";

test("create card", () => {
    const wrapper = renderer.create(<Card />);
    expect(wrapper).toMatchSnapshot();
});

test("With Image position bottom", () => {
    const wrapper = renderer.create(<CardImage position="bottom" />);
    expect(wrapper).toMatchSnapshot();
});

test("With Image", () => {
    const wrapper = renderer.create(<CardImage position="top" />);
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
