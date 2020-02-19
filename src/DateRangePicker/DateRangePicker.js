import React, {useState, useCallback} from "react";
import DateRPicker from '@wojtekmaj/react-daterange-picker';
import originalMoment from "moment";
import { extendMoment } from "moment-range";
const moment = extendMoment(originalMoment);
import PropTypes from "prop-types";

const DateRangePicker = ({className}) => {

    const today = moment();

    const [date, setDate] = useState([today.clone().subtract(7, "days"), today.clone()]);
    const onChange = (date) => setDate(date);

    return (
        <div>
            <DateRPicker
                onChange={onChange}
                value={date}
                calendarClassName={className}
            />
        </div>
    );
}

DateRangePicker.defaultProps = {
    className:'primary'
};

DateRangePicker.propTypes = {
    className: PropTypes.string,
};


export default DateRangePicker;
