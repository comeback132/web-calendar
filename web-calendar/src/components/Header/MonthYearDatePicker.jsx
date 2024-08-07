import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';
import { DatePickerWrapper, MonthYearPickerWrapper, MonthYearButton } from './style';

const MonthYearDatePicker = ({ selectedDate, onDateChange }) => {
  const [startDate, setStartDate] = useState(selectedDate || new Date());
  const [showMonthYear, setShowMonthYear] = useState(false);

  const handleDateChange = (date) => {
    setStartDate(date);
    onDateChange(date);
  };

  const toggleMonthYearPicker = () => {
    setShowMonthYear(!showMonthYear);
  };

  const handleMonthChange = (event) => {
    const newDate = new Date(startDate);
    newDate.setMonth(event.target.value);
    setStartDate(newDate);
    onDateChange(newDate);
  };

  const handleYearChange = (event) => {
    const newDate = new Date(startDate);
    newDate.setFullYear(event.target.value);
    setStartDate(newDate);
    onDateChange(newDate);
  };

  return (
    <DatePickerWrapper>
      <div>
        <button onClick={toggleMonthYearPicker}>
          {format(startDate, 'MMMM yyyy')}
        </button>
        {showMonthYear && (
          <MonthYearPickerWrapper>
            <div>
              <select value={startDate.getMonth()} onChange={handleMonthChange}>
                {Array.from({ length: 12 }, (_, i) => (
                  <option key={i} value={i}>
                    {format(new Date(startDate.getFullYear(), i), 'MMMM')}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <select value={startDate.getFullYear()} onChange={handleYearChange}>
                {Array.from({ length: 10 }, (_, i) => (
                  <option key={i} value={startDate.getFullYear() - 5 + i}>
                    {startDate.getFullYear() - 5 + i}
                  </option>
                ))}
              </select>
            </div>
          </MonthYearPickerWrapper>
        )}
      </div>
      <DatePickerWrapper>
        <DatePicker
          selected={startDate}
          onChange={handleDateChange}
          inline
          showMonthYearPicker
          dateFormat="MMMM yyyy"
        />
      </DatePickerWrapper>
    </DatePickerWrapper>
  );
};

export default MonthYearDatePicker;
