import React from "react";
import { useSelector } from "react-redux";

import {
  DayViewWrapper,
  DayViewHeader,
  DayViewBody,
  DayViewHour,
  HourLabel,
  HourEvents,
  DayViewEvent,
  EventTime,
  EventTitle,
  AllDayEventWrap,
  AllDayEvent,
  TodayDate,
} from "./style";

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
  const allDayEvents = dayEvents.filter((event) => event.allDay === true);
  console.log(allDayEvents);

  return (
    <DayViewWrapper>
      <DayViewHeader>
        <TodayDate>
          <h2>
            {new Date(selectedDate).toLocaleDateString("en-US", {
              day: "numeric",
              weekday: "short",
            })}
          </h2>
        </TodayDate>
        <AllDayEventWrap>
          {allDayEvents.map((event) => (
            <AllDayEvent color={event.color} key={event.id}>
              <EventTitle>{event.title}</EventTitle>
            </AllDayEvent>
          ))}
        </AllDayEventWrap>
      </DayViewHeader>
      <DayViewBody>
        {timeOptions.map((hour) => (
          <DayViewHour key={hour}>
            <HourLabel>{hour}</HourLabel>
            <HourEvents>
              {dayEvents.map((event) => {
                const { hours: startHours } = parseTime(event.startTime);
                const currentHour = parseTime(hour).hours;
                if (currentHour === startHours && !event.allDay) {
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
