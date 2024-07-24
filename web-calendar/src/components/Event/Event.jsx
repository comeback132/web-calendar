import React from 'react';
import PropTypes from 'prop-types';

const Event = ({ event }) => {
  return (
    <div className="event" style={{ backgroundColor: event.color }}>
      <h3>{event.title}</h3>
      <p>{event.startTime} - {event.endTime}</p>
    </div>
  );
};

Event.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    startTime: PropTypes.string.isRequired,
    endTime: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    calendarId: PropTypes.string.isRequired,
  }).isRequired,
};

export default Event;
