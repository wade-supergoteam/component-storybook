import React from "react";
import renderer from "react-test-renderer";
import { Grid, GridItem } from "../";
import { defaulttheme } from "../default-theme";

const debugDefault = true;
const defaultGutter = 20;

test("Create Default Grid", () => {
    const wrapper = renderer.create(<Grid />);
    expect(wrapper).toMatchSnapshot();
});

test("Create Default Grid with default theme", () => {
    const wrapper = renderer.create(<Grid defaulttheme />);
    expect(wrapper).toMatchSnapshot();
});

test("Create Default Grid with getGridVerticalRules", () => {
    const wrapper = renderer.create(<Grid getGridVerticalRules />);
    expect(wrapper).toMatchSnapshot();
});

test("Create Default Grid with getGridVerticalRules2", () => {
    const wrapper = renderer.create(<Grid getGridVerticalRules="bottom" />);
    expect(wrapper).toMatchSnapshot();
});

test("Create Default Grid with getGridVerticalRules2", () => {
    const wrapper = renderer.create(<Grid getGridGutterRules="full" />);
    expect(wrapper).toMatchSnapshot();
});

test("Create Default Grid with default theme", () => {
    const wrapper = renderer.create(<Grid getGridGutterRules />);
    expect(wrapper).toMatchSnapshot();
});

test("Middle Center Grid", () => {
    const wrapper = renderer.create(<Grid middle center />);
    expect(wrapper).toMatchSnapshot();
});

test("Grid item", () => {
    const wrapper = renderer.create(<GridItem media={{ phone: 1, tablet: 1 }}  />);
    expect(wrapper).toMatchSnapshot();
});

test("Grid item 2", () => {
    const wrapper = renderer.create(<GridItem media={{ phone: 1, tablet: 1 / 2 }} col={1 / 4} />);
    expect(wrapper).toMatchSnapshot();
});

