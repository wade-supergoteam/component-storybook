import React from "react";
import { storiesOf } from "@storybook/react";
import { host } from "storybook-host";
import { withKnobs } from "@storybook/addon-knobs/react";

import DatePicker from "../DatePicker";

export default storiesOf("Date picker", module)
    .addDecorator(withKnobs)
    .addDecorator(
        host({
            align: "center",
            width: 460,
        }),
    )
    .add("Date picker simple", () => (
        <DatePicker  />
    ));