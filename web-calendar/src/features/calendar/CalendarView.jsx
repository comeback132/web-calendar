import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CustomDatePicker from '@/components/CustomDatePicker/DatePicker';
import EventList from '@/features/calendar/EventList';
import { setSelectedDate } from '@/features/calendar/calendarSlice';


const CalendarView = () => {
  const selectedDate = useSelector((state) => state.calendar.selectedDate);
  return (
    <div className="calendar-view">
      <EventList date={selectedDate} />
    </div>
  );
};

export default CalendarView;

