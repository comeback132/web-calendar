import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

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
  align-items: center;
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
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;

const DayViewEvent = styled.div`
  position: absolute;
  padding: 10px;
  color: black;
  z-index: 999;
`;

const timeOptions = [
  "12:00 am",
  "01:00 am",
  "02:00 am",
  "03:00 am",
  "04:00 am",
  "05:00 am",
  "06:00 am",
  "07:00 am",
  "08:00 am",
  "09:00 am",
  "10:00 am",
  "11:00 am",
  "12:00 pm",
  "01:00 pm",
  "02:00 pm",
  "03:00 pm",
  "04:00 pm",
  "05:00 pm",
  "06:00 pm",
  "07:00 pm",
  "08:00 pm",
  "09:00 pm",
  "10:00 pm",
  "11:00 pm",
];
const formatHourLabel = (hour) => {
  const formattedHour = hour % 12 === 0 ? 12 : hour % 12;
  const amPm = hour < 12 ? "am" : "pm";
  return `${formattedHour} ${amPm}`;
};

const parseTime = (time) => {
  const [hourPart, minutePart] = time.split(':');
  const [minutes, period] = minutePart.split(' ');
  let hours = parseInt(hourPart, 10);
  if (period === 'pm' && hours !== 12) {
    hours += 12;
  } else if (period === 'am' && hours === 12) {
    hours = 0;
  }
  return { hours, minutes: parseInt(minutes, 10) };
};

const getEventStyle = (event) => {
  const { hours: startHours, minutes: startMinutes } = parseTime(event.startTime);
  const { hours: endHours, minutes: endMinutes } = parseTime(event.endTime);

  const startInMinutes = (startHours * 60) + startMinutes;
  const endInMinutes = (endHours * 60) + endMinutes;
  const durationInMinutes = endInMinutes - startInMinutes;

  return {
    top: `${startInMinutes}px`,
    height: `${durationInMinutes}px`,
  };
};

const DayView = () => {
  //const events = useSelector((state) => state.calendar.calendars.events) || [];
  const calendars = useSelector((state) => state.calendar.calendars);
  const allEvents = calendars.reduce((acc, calendar) => {
    return acc.concat(calendar.events);
  }, []);

  const selectedDate = useSelector((state) => state.calendar.selectedDate);

  const allEventsDates = allEvents.map((event) => event.date);

  // Filter events for the selected date
  const dayEvents = allEvents.filter(
    (event) =>
      new Date(event.date).toDateString() ===
      new Date(selectedDate).toDateString()
  );

  return (
    <DayViewWrapper>
      <DayViewHeader>
        <h2>{new Date(selectedDate).toDateString()}</h2>
      </DayViewHeader>
      <DayViewBody>
        {timeOptions.map((hour) => (
          <DayViewHour key={hour}>
            <HourLabel>{hour}</HourLabel>
            <HourEvents>
              {dayEvents
                .filter((event) => {
                  const eventStartHour = event.startTime;
                  const eventEndHour = event.endTime;
                  return eventStartHour <= hour && hour < eventEndHour;
                })
                .map((event) => (
                  <DayViewEvent
                    key={event.id}
                    style={{
                      ...getEventStyle(event),
                      backgroundColor: event.color,
                    }}
                  >
                    <div>{event.title}</div>
                    <div>
                      {event.startTime} - {event.endTime}
                    </div>
                  </DayViewEvent>
                ))}
            </HourEvents>
          </DayViewHour>
        ))}
      </DayViewBody>
    </DayViewWrapper>
  );
};

export default DayView;
