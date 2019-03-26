import React from "react";
import renderer from "react-test-renderer";
import DismissableAlert from "../DismissableAlert";
import Alert from "../";

test("Create Alert", () => {
    const wrapper = renderer.create(<Alert />);
    expect(wrapper).toMatchSnapshot();
});

test("Create DismissableAlert", () => {
    const wrapper = renderer.create(<DismissableAlert type="primary" />);
    expect(wrapper).toMatchSnapshot();
});

test("Create DismissableAlert with onClose", () => {
    const wrapper = renderer.create(<DismissableAlert type="primary" onClose={() => this.closeAlert("primary")} />);
    expect(wrapper).toMatchSnapshot();
});
