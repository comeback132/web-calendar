import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { DatePickerWrapper } from "./style";

const CustomDatePicker = ({ selectedDate, onDateChange }) => {
  const [startDate, setStartDate] = useState(selectedDate || new Date());

  const handleDateChange = (date) => {
    setStartDate(date);
    onDateChange(date);
};

  const handleClick = (e) => {
    e.stopPropagation();  // Prevent the click event from propagating
  };

  return (
      <DatePickerWrapper onClick={handleClick}>
          <DatePicker
              fixedHeight={false}
              selected={startDate}
              onChange={handleDateChange}
              inline
              formatWeekDay={(nameOfDay) => nameOfDay.substr(0, 1)}
          />
      </DatePickerWrapper>
  );
};

export default CustomDatePicker;
