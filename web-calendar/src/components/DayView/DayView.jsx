import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import rgba from "polished/lib/color/rgba";

const DayViewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  flex-grow: 1;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const DayViewHeader = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #dedfe5;
`;

const DayViewBody = styled.div`
  position: relative;
  overflow: hidden;
`;

const DayViewHour = styled.div`
  display: flex;
  min-height: 59px;
  position: relative;
  align-items: center;
  &:not(:last-child) {
    border-bottom: 1px solid #dedfe5;
  }
`;

const HourLabel = styled.div`
  width: 60px;
  height: 59px;
  text-align: center;
  border-right: 1px solid #dedfe5;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const HourEvents = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;

const DayViewEvent = styled.div`
  display: flex;
  flex-wrap:wrap;
  flex-direction: column;
  justify-content: flex-start;
  position: absolute;
  color: black;
  z-index: 2;
  width: 100%;
  border-radius: 4px;
  border-left: 6px solid ${(props) => props.color};
  background-color: ${(props) =>
    rgba(props.color, 0.3)}; /* Adjust opacity here */
`;
const EventTitle = styled.div`
  padding-left: 12px;
`;
const EventTime = styled.div`
  padding-left: 12px;
`;

const timeOptions = [
  "00:00 am",
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
  "13:00 pm",
  "14:00 pm",
  "15:00 pm",
  "16:00 pm",
  "17:00 pm",
  "18:00 pm",
  "19:00 pm",
  "20:00 pm",
  "21:00 pm",
  "22:00 pm",
  "23:00 pm",
];
const formatHourLabel = (hour) => {
  const formattedHour = hour % 12 === 0 ? 12 : hour % 12;
  const amPm = hour < 12 ? "am" : "pm";
  return `${formattedHour} ${amPm}`;
};

const parseTime = (time) => {
  const [timePart, period] = time.split(" ");
  let [hours, minutes] = timePart.split(":").map(Number);
  if (period.toLowerCase() === "pm" && hours !== 12) {
    hours += 12;
  } else if (period.toLowerCase() === "am" && hours === 12) {
    hours = 0;
  }
  return { hours, minutes };
};

const getEventStyle = (event) => {
  const { hours: startHours, minutes: startMinutes } = parseTime(
    event.startTime
  );
  const { hours: endHours, minutes: endMinutes } = parseTime(event.endTime);
  console.log(event.endTime);
  const startInMinutes = startMinutes;
  console.log(endHours);
  const startTimeMinHours = startHours * 60 + startMinutes;
  const endInMinutes = endHours * 60 + endMinutes;
  const durationInMinutes = endInMinutes - startTimeMinHours;

  return {
    top: `${(startInMinutes / 60) * 60}px`,
    height: `${durationInMinutes}px`,
  };
};

const DayView = () => {
  const calendars = useSelector((state) => state.calendar.calendars);
  const allEvents = calendars.reduce(
    (acc, calendar) => acc.concat(calendar.events),
    []
  );
  const selectedDate = useSelector((state) => state.calendar.selectedDate);

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
              {dayEvents.map((event) => {
                const { hours: startHours } = parseTime(event.startTime);
                const currentHour = parseTime(hour).hours;
                if (currentHour === startHours) {
                  return (
                    <DayViewEvent
                      color={event.color}
                      key={event.id}
                      style={{
                        ...getEventStyle(event),
                      }}
                    >
                      <EventTitle>{event.title}</EventTitle>
                      <EventTime>
                        {event.startTime} - {event.endTime}
                      </EventTime>
                    </DayViewEvent>
                  );
                }
                return null;
              })}
            </HourEvents>
          </DayViewHour>
        ))}
      </DayViewBody>
    </DayViewWrapper>
  );
};

export default DayView;
