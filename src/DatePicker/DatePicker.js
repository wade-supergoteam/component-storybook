import React, { Component, useState } from 'react';
import DatePicker from 'react-date-picker';
import PropTypes from "prop-types";


const Datepicker = ({block}) => {

    const defaultDate = new Date();
    const [date, setDate] = useState(defaultDate);
    const onChange = event => setDate(event);

    return (
        <div>
            <DatePicker
                onChange={onChange}
                value={date}
                autoFocus={false}
                className={block}
            />
        </div>
    );
}

Map.defaultProps = {
    block:'primary'
};

Map.propTypes = {
    className: PropTypes.string,
};

export default Datepicker;
