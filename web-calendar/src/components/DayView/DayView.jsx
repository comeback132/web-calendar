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
import { timeOptions } from "../../constants/constants";
import {parseTime} from "../../helpers/helpers"





const DayView = () => {
  const calendars = useSelector((state) => state.calendar.calendars);
  const selectedCalendars = calendars.filter((calendar) => calendar.selected);
  const allEvents = selectedCalendars.reduce(
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
