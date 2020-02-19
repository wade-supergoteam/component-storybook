import React, { Component, useState } from 'react';
import DtPicker from 'react-date-picker';
import PropTypes from "prop-types";


const DatePicker = ({block}) => {

    const defaultDate = new Date();
    const [date, setDate] = useState(defaultDate);
    const onChange = event => setDate(event);

    return (
        <div>
            <DtPicker
                onChange={onChange}
                value={date}
                autoFocus={false}
                className={block}
            />
        </div>
    );
}

DatePicker.defaultProps = {
    block:'primary'
};

DatePicker.propTypes = {
    className: PropTypes.string,
};

export default DatePicker;
