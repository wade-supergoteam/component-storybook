import React from "react";
import renderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";
import StyledPopover from "../StyledPopover";
import Popovers from "../Popover";
import { placementTop, placementBottom, placementRight, placementLeft } from "../placementFunctions";

test("Default Popovers", () => {
    const wrapper = renderer.create(<Popovers title="Top" placement="top" arrowOffset="30" positionLeft="0" />);
    expect(wrapper).toMatchSnapshot();
});

test("Default Popovers bottom", () => {
    const wrapper = renderer.create(<Popovers title="bottom" placement="bottom" arrowOffset="30" positionLeft="20" />);
    expect(wrapper).toMatchSnapshot();
});

test("Default Popovers left", () => {
    const wrapper = renderer.create(<Popovers title="left" placement="left" arrowOffset="30" positionLeft="0" />);
    expect(wrapper).toMatchSnapshot();
});

test("Default Popovers left 50%", () => {
    const wrapper = renderer.create(<Popovers title="left" placement="left" arrowOffset="30" positionLeft="50%" />);
    expect(wrapper).toMatchSnapshot();
});


test("Default Popovers right", () => {
    const wrapper = renderer.create(<Popovers title="right" placement="right" arrowOffset="30" positionLeft="20" />);
    expect(wrapper).toMatchSnapshot();
});

test("Default Popovers right", () => {
    const wrapper = renderer.create(<Popovers title="right" />);
    expect(wrapper).toMatchSnapshot();
});

const customTheme = {
    popoverTitleBbg: "green",
    popoverBg: "#cce4ff",
    popoverBorderColor: "green",
};

test("Customized Popovers", () => {
    const wrapper = renderer.create(<ThemeProvider theme={customTheme} />);
    expect(wrapper).toMatchSnapshot();
});

test("Styled Popovers", () => {
    const wrapper = renderer.create(<StyledPopover />);
    expect(wrapper).toMatchSnapshot();
});


test("placementRight Popovers", () => {
    const wrapper = renderer.create(<placementRight />);
    expect(wrapper).toMatchSnapshot();
});

test("placementLeft Popovers", () => {
    const wrapper = renderer.create(<placementLeft />);
    expect(wrapper).toMatchSnapshot();
});


