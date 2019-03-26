import React from "react";
import renderer from "react-test-renderer";
import { configure, shallow, render, mount } from "enzyme";
import Collapse from "../";

const props = {  node: 10  };

test("it works", () => {
    const wrapper = renderer.create(<Collapse />);
    expect(wrapper).toMatchSnapshot();

    wrapper.getInstance().onEntering(props.node);
    wrapper.getInstance().onEntered();
    wrapper.getInstance().onExit(props.node);
    wrapper.getInstance().onExiting(props.node);
    wrapper.getInstance().onExited();

});

test("Collapse with status exited", () => {
    const wrapper = renderer.create(<Collapse status="exited" />);
    expect(wrapper).toMatchSnapshot();
});

test("Collapse with status entered", () => {
    const wrapper = renderer.create(<Collapse status="entered" />);
    expect(wrapper).toMatchSnapshot();
});

test("Collapse with status exiting", () => {
    const wrapper = renderer.create(<Collapse status="exiting" />);
    expect(wrapper).toMatchSnapshot();
});

