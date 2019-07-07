import "jest-styled-components";
import React from "react";
import renderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";
import Popovers from "../Popover";
import StyledPopover from "../StyledPopover";

test("Default Popovers", () => {
  const wrapper = renderer.create(
    <Popovers title="Top" placement="top" arrowOffset="30" positionLeft="0">
      Child goes here
    </Popovers>,
  );
  expect(wrapper).toMatchSnapshot();
});

test("Default Popovers bottom", () => {
  const wrapper = renderer.create(
    <Popovers title="bottom" placement="bottom" arrowOffset="30" positionLeft="20">
      Child goes here
    </Popovers>,
  );
  expect(wrapper).toMatchSnapshot();
});

test("Default Popovers left", () => {
  const wrapper = renderer.create(
    <Popovers title="left" placement="left" arrowOffset="30" positionLeft="0">
      Child goes here
    </Popovers>,
  );
  expect(wrapper).toMatchSnapshot();
});

test("Default Popovers left 50%", () => {
  const wrapper = renderer.create(
    <Popovers title="left" placement="left" arrowOffset="30" positionLeft="50">
      Child goes here
    </Popovers>,
  );
  expect(wrapper).toMatchSnapshot();
});

test("Default Popovers right", () => {
  const wrapper = renderer.create(
    <Popovers title="right" placement="right" arrowOffset="30" positionLeft="20">
      Child goes here
    </Popovers>,
  );
  expect(wrapper).toMatchSnapshot();
});

test("Default Popovers right", () => {
  const wrapper = renderer.create(<Popovers title="right">Child goes here</Popovers>);
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
