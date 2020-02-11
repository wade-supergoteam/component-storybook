import React from "react";
import { storiesOf } from "@storybook/react";
import { host } from "storybook-host";
import { withKnobs } from "@storybook/addon-knobs/react";

import Map from "../Map";
const keyGoogleMap='AIzaSyCVjC1we2LydgmmLYg3o2KgrmSLXK8k5Ac';

export default storiesOf("Google Map", module)
    .addDecorator(withKnobs)
    .addDecorator(
        host({
            align: "center",
            width: 460,
        }),
    )
    .add("Map simple", () => (
        <Map propKey={keyGoogleMap}
             lat={59.955413}
             lng={30.337844}
             markerLat={59.955413}
             markerLng={30.3}
             markerText={"Your Flag"}
             zoom={12}   />
    ));