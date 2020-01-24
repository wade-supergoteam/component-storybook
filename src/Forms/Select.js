import React, { Component } from 'react'
import ReactSelect from 'react-select'
import PropTypes from "prop-types"
import makeAnimated from 'react-select/animated'
import styled from "styled-components"

const animatedComponents = makeAnimated();

const Select = styled(ReactSelect)`  
  ${({ closeMenuOnSelect, name }) => {
    switch (closeMenuOnSelect) {
        case "true":
            return 'closeMenuOnSelect=true';
        case "false":
            return 'closeMenuOnSelect=false';
    }
    }};
    
};
`;

Select.defaultProps = {
    closeMenuOnSelect: false,
    components: animatedComponents,
    name: "color"
};

Select.propTypes = {
    closeMenuOnSelect: PropTypes.oneOf(["true", "false"]),
    options: PropTypes.object,
    isMulti: PropTypes.boolean,
    name: PropTypes.any

};
export default Select;
