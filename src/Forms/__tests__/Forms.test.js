import "jest-styled-components";
import React from "react";
import renderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";
import { CustomSelect, Input, Select, MultiSelect,Textarea, FormGroup } from "..";

const customInputTheme = {
  enableRounded: false,
  inputFocusColor: "SkyBlue",
  inputFocusBorderColor: "PowderBlue",
  inputFocusBoxShadow: "0 0 0 4px azure",
};

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]

test("Custom Select", () => {
  const wrapper = renderer.create(<CustomSelect />);
  expect(wrapper).toMatchSnapshot();
});

test("Form Group", () => {
  const wrapper = renderer.create(<FormGroup />);
  expect(wrapper).toMatchSnapshot();
});

test("Create Input Field", () => {
  const wrapper = renderer.create(<Input />);
  expect(wrapper).toMatchSnapshot();
});
test("Input Field disabled", () => {
  const wrapper = renderer.create(<Input disabled />);
  expect(wrapper).toMatchSnapshot();
});

test("Input Field small enabledRounded false", () => {
  const wrapper = renderer.create(<Input size="small" theme={{ enabledRounded: false }} />);
  expect(wrapper).toMatchSnapshot();
});

test("Large Input", () => {
  const wrapper = renderer.create(<Input size="large" theme={{ enabledRounded: true }} />);
  expect(wrapper).toMatchSnapshot();
});

test("Custom Input", () => {
  const wrapper = renderer.create(<ThemeProvider theme={customInputTheme} />);
  expect(wrapper).toMatchSnapshot();
});

test("Custom Input rounded", () => {
  const wrapper = renderer.create(<Input size="small" theme={{}} />);
  expect(wrapper).toMatchSnapshot();
});
test("Input with enableRounded", () => {
  const wrapper = renderer.create(<Input theme={{ enableRounded: true }} />);
  expect(wrapper).toMatchSnapshot();
});

test("Input with enableRounded false", () => {
  const wrapper = renderer.create(<Input theme={{ enableRounded: false }} />);
  expect(wrapper).toMatchSnapshot();
});

test("Input with enableShadows", () => {
  const wrapper = renderer.create(<Input theme={{ enableShadows: true }} />);
  expect(wrapper).toMatchSnapshot();
});

test("Input with enableShadows false", () => {
  const wrapper = renderer.create(<Input theme={{ enableShadows: false }} />);
  expect(wrapper).toMatchSnapshot();
});

test("Create Select", () => {
    const wrapper = renderer.create(<Select options={{options}} defaultValue={{ value: 'chocolate', label: 'Chocolate' }} />);
    expect(wrapper).toMatchSnapshot();
});

test("Multi Select", () => {
    const wrapper = renderer.create(<MultiSelect options={{options}} />);
    expect(wrapper).toMatchSnapshot();
});

test("Create CustomSelect with rounded borders", () => {
  const wrapper = renderer.create(<CustomSelect theme={{ enableRounded: true }} />);
  expect(wrapper).toMatchSnapshot();
});

test("Create CustomSelect with enableRounded false", () => {
  const wrapper = renderer.create(<CustomSelect theme={{ enableRounded: false }} />);
  expect(wrapper).toMatchSnapshot();
});

test("Create CustomSelect large", () => {
  const wrapper = renderer.create(<CustomSelect size="large" />);
  expect(wrapper).toMatchSnapshot();
});

test("Create CustomSelect small", () => {
  const wrapper = renderer.create(<CustomSelect size="small" />);
  expect(wrapper).toMatchSnapshot();
});

// test("Create Large Select", () => {
//   const wrapper = renderer.create(<Select size="large" />);
//   expect(wrapper).toMatchSnapshot();
// });

// test("Create Small Select", () => {
//   const wrapper = renderer.create(<Select size="small" />);
//   expect(wrapper).toMatchSnapshot();
// });

test("Create Textarea", () => {
  const wrapper = renderer.create(<Textarea />);
  expect(wrapper).toMatchSnapshot();
});
