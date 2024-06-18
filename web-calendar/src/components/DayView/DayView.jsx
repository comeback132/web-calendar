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
  color: black;
`;


const timeOptions = [
  "00:00 am",
  "00:15 am",
  "00:30 am",
  "00:45 am",
  "01:00 am",
  "01:15 am",
  "01:30 am",
  "01:45 am",
  "02:00 am",
  "02:15 am",
  "02:30 am",
  "02:45 am",
  "03:00 am",
  "03:15 am",
  "03:30 am",
  "03:45 am",
  "04:00 am",
  "04:15 am",
  "04:30 am",
  "04:45 am",
  "05:00 am",
  "05:15 am",
  "05:30 am",
  "05:45 am",
  "06:00 am",
  "06:15 am",
  "06:30 am",
  "06:45 am",
  "07:00 am",
  "07:15 am",
  "07:30 am",
  "07:45 am",
  "08:00 am",
  "08:15 am",
  "08:30 am",
  "08:45 am",
  "09:00 am",
  "09:15 am",
  "09:30 am",
  "09:45 am",
  "10:00 am",
  "10:15 am",
  "10:30 am",
  "10:45 am",
  "11:00 am",
  "11:15 am",
  "11:30 am",
  "11:45 am",
  "12:00 pm",
  "12:15 pm",
  "12:30 pm",
  "12:45 pm",
  "13:00 pm",
  "13:15 pm",
  "13:30 pm",
  "13:45 pm",
  "14:00 pm",
  "14:15 pm",
  "14:30 pm",
  "14:45 pm",
  "15:00 pm",
  "15:15 pm",
  "15:30 pm",
  "15:45 pm",
  "16:00 pm",
  "16:15 pm",
  "16:30 pm",
  "16:45 pm",
  "17:00 pm",
  "17:15 pm",
  "17:30 pm",
  "17:45 pm",
  "18:00 pm",
  "18:15 pm",
  "18:30 pm",
  "18:45 pm",
  "19:00 pm",
  "19:15 pm",
  "19:30 pm",
  "19:45 pm",
  "20:00 pm",
  "20:15 pm",
  "20:30 pm",
  "20:45 pm",
  "21:00 pm",
  "21:15 pm",
  "21:30 pm",
  "21:45 pm",
  "22:00 pm",
  "22:15 pm",
  "22:30 pm",
  "22:45 pm",
  "23:00 pm",
  "23:15 pm",
  "23:30 pm",
  "23:45 pm",
];
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

  const allEventsDates=allEvents.map((event)=>event.date);

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
        {timeOptions.map((hour) => (
          <DayViewHour key={hour}>
            <HourLabel>{hour}</HourLabel>
            <HourEvents>
              {dayEvents
                .filter(event => {
                  const eventStartHour = event.startTime;
                  console.log(eventStartHour);
                  const eventEndHour = event.endTime;
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
