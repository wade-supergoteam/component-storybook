import React from "react";
import renderer from "react-test-renderer";
import ListGroupItem from "../ListGroupItem";
import ListGroupButton from "../ListGroupButton";
import ListGroupLink from "../ListGroupLink";
import ListGroup from "../";

test("Basic Example", () => {
    const wrapper = renderer.create(<ListGroup />);
    expect(wrapper).toMatchSnapshot();
});

test("Flush List group", () => {
    const wrapper = renderer.create(<ListGroup flush />);
    expect(wrapper).toMatchSnapshot();
});

test("Disabled items", () => {
    const wrapper = renderer.create(<ListGroupItem disabled />);
    expect(wrapper).toMatchSnapshot();
});

test("Links", () => {
    const wrapper = renderer.create(<ListGroupLink href="#" />);
    expect(wrapper).toMatchSnapshot();
});

test("Buttons", () => {
    const wrapper = renderer.create(<ListGroupButton />);
    expect(wrapper).toMatchSnapshot();
});


