import { withInfo } from "@storybook/addon-info";
import { boolean, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React, { Fragment } from "react";
import { host } from "storybook-host";
import { Grid, GridItem } from "../Grid";

const debugDefault: boolean = true;

export default storiesOf("Grids", module)
  .addDecorator(withInfo)
  .addDecorator(
    host({
      align: "center",
      width: "90vw",
    }),
  )
  .addDecorator(withKnobs)
  .add("Default", () => (
    <Fragment>
      <Grid gutter={50}>
        <GridItem media={{ phone: 1, tablet: 1 / 2 }} col={1 / 4} debug={boolean("Debug", debugDefault)}>
          <p>Item 1</p>
        </GridItem>
        <GridItem media={{ phone: 1, tablet: 1 / 2 }} col={1} debug={boolean("Debug", debugDefault)}>
          <p>Item 2</p>
        </GridItem>
        <GridItem media={{ phone: 1, tablet: 1 / 2 }} col={1 / 4} debug={boolean("Debug", debugDefault)}>
          <p>Item 3</p>
        </GridItem>
        <GridItem media={{ phone: 1, tablet: 1 / 2 }} col={1 / 4} debug={boolean("Debug", debugDefault)}>
          <p>Item 4</p>
        </GridItem>
      </Grid>
    </Fragment>
  ))
  .add("Middle Center", () => (
    <Fragment>
      <Grid middle center>
        <GridItem media={{ phone: 1, tablet: 1 / 2 }} col={1 / 4} debug={boolean("Debug", debugDefault)}>
          <p>Item 1</p>
        </GridItem>
        <GridItem col={3 / 4} debug={boolean("Debug", debugDefault)} />
        <GridItem media={{ phone: 1, tablet: 1 }} col={1 / 4} debug={boolean("Debug", debugDefault)}>
          <h1>Item 2</h1>
        </GridItem>
        <GridItem media={{ phone: 1, tablet: 1 / 2 }} col={1 / 4} debug={boolean("Debug", debugDefault)}>
          <Grid middle center>
            <GridItem media={{ phone: 1 }} debug={boolean("Debug", debugDefault)}>
              <p>Item 3a</p>
            </GridItem>
            <GridItem media={{ phone: 1 }} debug={boolean("Debug", debugDefault)}>
              <p>Item 3b</p>
            </GridItem>
            <GridItem media={{ phone: 1 }} debug={boolean("Debug", debugDefault)}>
              <p>Item 3b</p>
            </GridItem>
            <GridItem media={{ phone: 1 }} debug={boolean("Debug", debugDefault)}>
              <p>Item 3b</p>
            </GridItem>
          </Grid>
        </GridItem>
        <GridItem media={{ phone: 1, tablet: 1 }} col={1 / 2} debug={boolean("Debug", debugDefault)}>
          <p>Item 4</p>
        </GridItem>
      </Grid>
    </Fragment>
  ));
