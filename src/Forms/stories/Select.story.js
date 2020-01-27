import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import { host } from "storybook-host";
import { withKnobs, select } from "@storybook/addon-knobs/react";

import Select from "../Select";

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]

export default storiesOf("Forms", module)
  .addDecorator(withKnobs)
  .addDecorator(
    host({
      align: "center",
      width: 400,
    }),
  )
  .add("Multi Select autoclose", () => (
    <Fragment>
      <Select closeMenuOnSelect={true}
              isMulti
              defaultValue={options[0]}
              options={options}
             />
    </Fragment>
  ))
.add("Multi Select", () => (
    <Fragment>
        <Select closeMenuOnSelect={false}
                 isMulti
                 defaultValue={options[0]}
                 options={options}
        />
    </Fragment>
));