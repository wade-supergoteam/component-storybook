import React from "react";
import renderer from "react-test-renderer";
import Forms from "../";
import CustomSelect from "../CustomSelect";
import Input from "../Input";
import Select from "../Select";
import Textarea from "../Textarea";
import { ThemeProvider } from "styled-components";



const customInputTheme = {
    enableRounded: false,
    inputFocusColor: "SkyBlue",
    inputFocusBorderColor: "PowderBlue",
    inputFocusBoxShadow: "0 0 0 4px azure",
};


test("Custom Select", () => {
    const wrapper = renderer.create(<CustomSelect />);
    expect(wrapper).toMatchSnapshot();
});

test("Create Input Field", () => {
    const wrapper = renderer.create(<Input />);
    expect(wrapper).toMatchSnapshot();
});

test("Small Input", () => {
    const wrapper = renderer.create(<Input size="small" />);
    expect(wrapper).toMatchSnapshot();
});

test("Large Input", () => {
    const wrapper = renderer.create(<Input size="large" />);
    expect(wrapper).toMatchSnapshot();
});

test("Custom Input", () => {
    const wrapper = renderer.create(<ThemeProvider theme={customInputTheme} />);
    expect(wrapper).toMatchSnapshot();
});

test("Create Select", () => {
    const wrapper = renderer.create(<Select />);
    expect(wrapper).toMatchSnapshot();
});

test("Create Large Select", () => {
    const wrapper = renderer.create(<Select size="large" />);
    expect(wrapper).toMatchSnapshot();
});

test("Create Small Select", () => {
    const wrapper = renderer.create(<Select size="small" />);
    expect(wrapper).toMatchSnapshot();
});

test("Create Textarea", () => {
    const wrapper = renderer.create(<Textarea />);
    expect(wrapper).toMatchSnapshot();
});

