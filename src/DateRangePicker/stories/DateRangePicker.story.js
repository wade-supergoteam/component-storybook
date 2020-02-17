import React from "react";
import { storiesOf } from "@storybook/react";
import { host } from "storybook-host";
import { withKnobs } from "@storybook/addon-knobs/react";

import DateRangePicker from "../DateRangePicker";

export default storiesOf("Date  range picker", module)
    .addDecorator(withKnobs)
    .addDecorator(
        host({
            align: "center",
            width: 460,
        }),
    )
    .add("Date range picker simple", () => (
        <DateRangePicker textCLickButoon={'click on the button'}
                         Selection={'Selection'}
        />
    ));