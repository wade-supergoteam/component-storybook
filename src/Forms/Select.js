import React, { Component } from 'react'
import Select from 'react-select'
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]

export default function AnimatedMulti() {
    return (
        <Select
            closeMenuOnSelect={false}
            defaultValue={options[0]}
            components={animatedComponents}
            isMulti
            options={options}
        />
    );
}