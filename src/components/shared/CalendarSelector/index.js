import React, {forwardRef} from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

// another styles in the GlobalStyles.js

const CalendarSelector = ({startDate, setStartDate}) => {
    return (
        <>
            <DatePicker 
                selected={startDate} 
                onChange={date => setStartDate(date)} 
                dateFormat="dd MMMM yyyy"
            />
        </>
    )
}

export default CalendarSelector;
