import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const DayViewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  flex-grow: 1;
`;

const DayViewHeader = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

const DayViewBody = styled.div`
  position: relative;
  border: 1px solid #dedfe5;
  border-radius: 8px;
  overflow: hidden;
`;

const DayViewHour = styled.div`
  display: flex;
  min-height: 60px;
  position: relative;

  &:not(:last-child) {
    border-bottom: 1px solid #dedfe5;
  }
`;

const HourLabel = styled.div`
  width: 60px;
  text-align: center;
  padding: 10px;
  border-right: 1px solid #dedfe5;
  background-color: #f7f7f7;
`;

const HourEvents = styled.div`
  flex: 1;
  padding: 10px;
  position: relative;
`;

const DayViewEvent = styled.div`
  position: absolute;
  left: 60px;
  right: 10px;
  padding: 5px;
  border-radius: 4px;
  color: white;
`;

const formatHourLabel = (hour) => {
  const formattedHour = hour % 12 === 0 ? 12 : hour % 12;
  const amPm = hour < 12 ? 'am' : 'pm';
  return `${formattedHour} ${amPm}`;
};

const getEventStyle = (event) => {
  const startHour = new Date(event.start).getHours();
  const startMinutes = new Date(event.start).getMinutes();
  const endHour = new Date(event.end).getHours();
  const endMinutes = new Date(event.end).getMinutes();
  const top = (startHour * 60) + startMinutes;
  const height = ((endHour * 60) + endMinutes) - top;

  return {
    top: `${top}px`,
    height: `${height}px`,
  };
};

const DayView = () => {
  //const events = useSelector((state) => state.calendar.calendars.events) || [];
  const calendars = useSelector((state) => state.calendar.calendars)
  const allEvents = calendars.reduce((acc, calendar) => {
    return acc.concat(calendar.events);
  }, []);
  
  const selectedDate = useSelector((state) => state.calendar.selectedDate);

  // Filter events for the selected date
  const dayEvents = allEvents.filter(event => 
    new Date(event.date).toDateString() === new Date(selectedDate).toDateString()
  );

  return (
    <DayViewWrapper>
      {console.log(dayEvents)}
      <DayViewHeader>
        <h2>{new Date(selectedDate).toDateString()}</h2>
      </DayViewHeader>
      <DayViewBody>
        {[...Array(24)].map((_, hour) => (
          <DayViewHour key={hour}>
            <HourLabel>{formatHourLabel(hour)}</HourLabel>
            <HourEvents>
              {dayEvents
                .filter(event => {
                  const eventStartHour = new Date(event.startTime).getHours();
                  const eventEndHour = new Date(event.endTime).getHours();
                  return eventStartHour <= hour && hour < eventEndHour;
                })
                .map(event => (
                  <DayViewEvent key={event.id} style={{ ...getEventStyle(event), backgroundColor: event.color }}>
                    <div>{event.title}</div>
                    <div>
                      {new Date(event.startTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - 
                      {new Date(event.endTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </DayViewEvent>
                ))
              }
            </HourEvents>
          </DayViewHour>
        ))}
      </DayViewBody>
    </DayViewWrapper>
  );
};

export default DayView;
