import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const DayViewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  flex-grow: 100;
`;

const DayViewHeader = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

const DayViewBody = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #dedfe5;
  border-radius: 8px;
  overflow: hidden;
`;

const DayViewHour = styled.div`
  display: flex;
  border-bottom: 1px solid #dedfe5;
  min-height: 60px;
  position: relative;

  &:last-child {
    border-bottom: none;
  }
`;

const HourLabel = styled.div`
  width: 50px;
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

const DayView = () => {
  const events = useSelector((state) => state.calendar.events) || [];
  const selectedDate = useSelector((state) => state.calendar.selectedDate);

  // Filter events for the selected date
  const dayEvents = events.filter(event => 
    new Date(event.date).toDateString() === new Date(selectedDate).toDateString()
  );

  return (
    <DayViewWrapper>
      <DayViewHeader>
        <h2>{new Date(selectedDate).toDateString()}</h2>
      </DayViewHeader>
      <DayViewBody>
        {[...Array(24)].map((_, hour) => (
          <DayViewHour key={hour}>
            <HourLabel>{hour}:00</HourLabel>
            <HourEvents>
              {dayEvents
                .filter(event => new Date(event.date).getHours() === hour)
                .map(event => (
                  <DayViewEvent key={event.id} style={{ backgroundColor: event.color }}>
                    {event.title}
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
