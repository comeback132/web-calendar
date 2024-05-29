import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addCalendar, editCalendar, deleteCalendar } from '@/features/calendar/calendarSlice';

const CalendarList = () => {
  const dispatch = useDispatch();
  const calendars = useSelector(state => state.calendar.calendars);

  const handleAddCalendar = () => {
    const newCalendar = { id: `cal-${Date.now()}`, name: 'New Calendar', color: '#FF0000', events: [] };
    dispatch(addCalendar(newCalendar));
  };

  return (
    <div className="calendar-list">
      {calendars.map(calendar => (
        <div key={calendar.id} className="calendar-item">
          <span style={{ backgroundColor: calendar.color }}>{calendar.name}</span>
          {/* Add Edit and Delete functionality here */}
        </div>
      ))}
      <button onClick={handleAddCalendar}>Add Calendar</button>
    </div>
  );
};

export default CalendarList;
