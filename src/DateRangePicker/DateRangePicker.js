import React, {useState, useCallback} from "react";
import DateRPicker from "react-daterange-picker";
import "react-daterange-picker/dist/css/react-calendar.css";
import originalMoment from "moment";
import { extendMoment } from "moment-range";
const moment = extendMoment(originalMoment);
import PropTypes from "prop-types";


const DateRangePicker = ({textCLickButoon, Selection}) => {

    const today = moment();

    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState(moment.range(today.clone().subtract(7, "days"), today.clone()));

    const selectTag = (states) => {
        setValue(states);
    };

    const onToggle = () => {
        setIsOpen(!isOpen);
    };

    const renderSelectionValue = () => {
        return (
            <div>
                <div>{Selection}</div>
                {value.start.format("YYYY-MM-DD")}
                {" - "}
                {value.end.format("YYYY-MM-DD")}
            </div>
        );
    };

    return (
        <div>
            <div>{renderSelectionValue()}</div>

            <div>
                <input
                    type="button"
                    value={textCLickButoon}
                    onClick={onToggle}
                />
            </div>

            {isOpen && (
                <DateRPicker
                    value={value}
                    onSelect={selectTag}
                    singleDateRange={true}
                />
            )}
        </div>
    );
}

DateRangePicker.defaultProps = {
    textCLickButoon: 'Toggle the button',
    Selection: 'Selection'
};

DateRangePicker.propTypes = {
    Selection: PropTypes.string,
    textCLickButoon: PropTypes.string
};




export default DateRangePicker;
