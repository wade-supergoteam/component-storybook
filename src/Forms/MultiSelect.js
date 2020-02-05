import React, { Component } from 'react'
import ReactSelect from 'react-select'
import PropTypes from "prop-types"
import Select from './Select'

const MultiSelect = ({options}) => {
    return (
        <Select closeMenuOnSelect={false}
                     isMulti
                     options={options}
                     defaultValue={options[0]}
        />
    );
};

Select.propTypes = {
    options: PropTypes.object
};
export default MultiSelect;
