import React from "react";
import renderer from "react-test-renderer";
import Button from "../";

test("it works", () => {
  const wrapper = renderer.create(<Button />);
  expect(wrapper).toMatchSnapshot();
});

test("Outline variant", () => {
  const wrapper = renderer.create(<Button outline block  color="primary"/>);
  expect(wrapper).toMatchSnapshot();
});

test("Rounded variant", () => {
  const wrapper = renderer.create(<Button theme={{ enableRounded: true }} outline />);

  expect(wrapper).toMatchSnapshot();
});

test("Disable rounded variant", () => {
  const wrapper = renderer.create(<Button theme={{ enableRounded: false }} outline />);
  expect(wrapper).toMatchSnapshot();
});

const margin = { marginRight: 6, marginBottom: 6 };

test("Button with small size and margin", () => {
    const wrapper = renderer.create(<Button style={margin} color="success" size="small" theme={{ enableRounded: true }} active />);
    expect(wrapper).toMatchSnapshot();
});

test("Button with large size and margin and enableRounded=true", () => {
    const wrapper = renderer.create(<Button style={margin} color="success" size="large" theme={{ enableRounded: true }} />);
    expect(wrapper).toMatchSnapshot();
});

test("Button with large size and margin and enableRounded=false", () => {
    const wrapper = renderer.create(<Button style={margin} color="success" size="large" theme={{ enableRounded: false }} />);
    expect(wrapper).toMatchSnapshot();
});

test("Button with small size and margin and enableRounded=false", () => {
    const wrapper = renderer.create(<Button style={margin} color="success" size="small" theme={{ enableRounded: false }} />);
    expect(wrapper).toMatchSnapshot();
});

test("Button color=link", () => {
    const wrapper = renderer.create(<Button color="link" size="small" theme={{ enableRounded: false }} />);
    expect(wrapper).toMatchSnapshot();
});