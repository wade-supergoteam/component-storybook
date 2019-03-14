import React from "react";
import renderer from "react-test-renderer";
import CloseIcon from "../";
import { ThemeProvider } from "styled-components";


const customTheme = {
    closeFontSize: "1.75rem",
    closeFontWeight: 700,
    closeColor: "red",
    closeTextShadow: "0 1px 0 blue",
};

test("create default close icon", () => {
    const wrapper = renderer.create(<CloseIcon />);
    expect(wrapper).toMatchSnapshot();
});

test("With custom theme", () => {
    const wrapper = renderer.create(<ThemeProvider theme={customTheme} />);
    expect(wrapper).toMatchSnapshot();
});

