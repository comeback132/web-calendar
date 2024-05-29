import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CustomDatePicker from '@/components/CustomDatePicker/DatePicker';
import EventList from '@/features/calendar/EventList';
import { setSelectedDate } from '@/features/calendar/calendarSlice';

const CalendarView = () => {
  const dispatch = useDispatch();
  const selectedDate = useSelector((state) => state.calendar.selectedDate);

  const handleDateChange = (date) => {
    dispatch(setSelectedDate(date));
  };

  return (
    <div className="calendar-view">
      <CustomDatePicker selectedDate={selectedDate} onDateChange={handleDateChange} />
      <EventList date={selectedDate} />
    </div>
  );
};

export default CalendarView;

