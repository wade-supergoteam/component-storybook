import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import { host } from "storybook-host";
import { withKnobs, select } from "@storybook/addon-knobs/react";

import AnimatedMulti from "../Select";

export default storiesOf("Forms", module)
  .addDecorator(withKnobs)
  .addDecorator(
    host({
      align: "center",
      width: 400,
    }),
  )
  .add("Select", () => (
    <Fragment>
      <AnimatedMulti />
    </Fragment>
  ));
