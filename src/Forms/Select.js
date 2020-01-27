import React, { Component } from 'react'
import ReactSelect from 'react-select'
import PropTypes from "prop-types"
import makeAnimated from 'react-select/animated'


const animatedComponents = makeAnimated();

const Select = ({isMulti, closeMenuOnSelect, options}) => {
  return (
    <ReactSelect  closeMenuOnSelect={closeMenuOnSelect}
                 isMulti = {isMulti ? isMulti : ""}
                 options={options}
                 defaultValue={options[0]}
    />
  );
};

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
