import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import PropTypes from "prop-types"

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const keyGoogleMap='AIzaSyCVjC1we2LydgmmLYg3o2KgrmSLXK8k5Ac';

const Map = ({propKey, lat, lng, zoom, markerLat, markerLng, markerText}) => {
    const defaultProps = {
        center: {
            lat: lat,
            lng: lng
        },
        zoom: zoom
    };
    return (
        <div style={{ height: '100vh', width: '100%' }}>
                             <GoogleMapReact
                                 bootstrapURLKeys={{key: propKey}}
                                 defaultCenter={defaultProps.center}
                                 defaultZoom={defaultProps.zoom}
                             >
                                 <AnyReactComponent
                                     lat={markerLat}
                                     lng={markerLng}
                                     text={markerText}
                                 />
                             </GoogleMapReact>
                         </div>
    );
};
Map.defaultProps = {
    propKey: keyGoogleMap,
    lat: 59.95,
    lng: 30.33,
    zoom: 12,
    markerLat: 59.955413,
    markerLng: 30.337844,
    markerText: "My marker"
};

Map.propTypes = {
    propKey: PropTypes.string,
    lat: PropTypes.number,
    lng: PropTypes.number,
    zoom: PropTypes.number,
    markerLat: PropTypes.number,
    markerLng: PropTypes.number,
    markerText: PropTypes.string
};

export default Map;
