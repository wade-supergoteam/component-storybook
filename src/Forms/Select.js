import React, { Component } from 'react'
import Select from 'react-select'
import PropTypes from "prop-types"
import makeAnimated from 'react-select/animated'
import styled from "styled-components"

const animatedComponents = makeAnimated();

const MultiSelect = styled(Select)`  
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

MultiSelect.defaultProps = {
    closeMenuOnSelect: false,
    components: animatedComponents,
    name: "color"
};

MultiSelect.propTypes = {
    closeMenuOnSelect: PropTypes.oneOf(["true", "false"]),
    options: PropTypes.object,
    isMulti: PropTypes.boolean,
    name: PropTypes.any

};
export default MultiSelect;
