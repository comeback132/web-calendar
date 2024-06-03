// src/features/calendar/EventList.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import Event from '@/components/Event/Event';

const EventList = ({ date }) => {
  const calendars = useSelector(state => state.calendar.calendars);
  const events = calendars.flatMap(calendar =>
    calendar.events.filter(event => new Date(event.date).toDateString() === date.toDateString())
  );

  return (
    <div className="event-list">
      {events.map(event => (
        <Event key={event.id} event={event} />
      ))}
    </div>
  );
};

export default EventList;
