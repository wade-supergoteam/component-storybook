import { withInfo } from "@storybook/addon-info";
import { boolean, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React, { Fragment } from "react";
import { host } from "storybook-host";
import styled from "styled-components";
import { Grid, GridItem } from "../Grid";

const Input = styled.input`
  width: 100%;
  border-radius: 5px;
  padding: 0;
  margin: 3px 0 3px 0;
  border: none;
  background-color: whitesmoke;
`;

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
  ))
  .add("Registration Form", () => (
    <Fragment>
      <Grid middle gutter={5} style={{ width: 380, "background-color": "#17A2B8", "padding-right": "5px" }}>
        <GridItem col={1 / 6} debug={boolean("Debug", debugDefault)}>
          <Input placeholder="Title*" />
        </GridItem>
        <GridItem col={5 / 6} debug={boolean("Debug", debugDefault)}>
          <Input placeholder="First name*" />
        </GridItem>
        <GridItem col={1} debug={boolean("Debug", debugDefault)}>
          <Input placeholder="Last name*" />
        </GridItem>
        <GridItem col={1} debug={boolean("Debug", debugDefault)}>
          <Input placeholder="Email*" />
        </GridItem>
        <GridItem col={1 / 6} debug={boolean("Debug", debugDefault)}>
          <Input placeholder="+44*" />
        </GridItem>
        <GridItem col={5 / 6} debug={boolean("Debug", debugDefault)}>
          <Input placeholder="Phone number*" />
        </GridItem>
        <GridItem col={2 / 6} debug={boolean("Debug", debugDefault)}>
          <Input placeholder="Postcode*" />
        </GridItem>
        <GridItem col={2 / 6} debug={boolean("Debug", debugDefault)}>
          <Input placeholder="Postcode*" />
        </GridItem>
        <GridItem col={2 / 6} debug={boolean("Debug", debugDefault)}>
          <Input placeholder="Find my address*" />
        </GridItem>
      </Grid>
    </Fragment>
  ));
