import React from "react";
import { useSelector } from "react-redux";
import {
  WeekViewWrapper,
  WeekHeader,
  WeekBody,
  DayColumn,
  DayName,
  DayHeader,
  DayTitle,
  DateTitle,
  HourSlot,
  EventItem,
  HourLabel,
  AllDayEventWrap,
  AllDayEvent,
} from "./style";
import {
  DayViewEvent,
  EventTime,
  EventTitle,
} from "@/components/DayView/style";
import {parseTime, getEventStyle, getStartOfWeek, getEndOfWeek, formatDate, isToday} from "../../helpers/helpers"


const WeekView = () => {
  const calendars = useSelector((state) => state.calendar.calendars);
  const selectedCalendars = calendars.filter((calendar) => calendar.selected);
  const allEvents = selectedCalendars.reduce(
     (acc, calendar) => acc.concat(calendar.events),
     []
  );
  const selectedDate = useSelector((state) => state.calendar.selectedDate);
  const startOfWeek = getStartOfWeek(new Date(selectedDate));
  const endOfWeek = getEndOfWeek(new Date(selectedDate));
  const weekEvents = allEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate >= startOfWeek && eventDate <= endOfWeek;
  });
  const allDayEvents = weekEvents.filter((event) => event.allDay === true);

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const dates = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(startOfWeek);
    date.setDate(startOfWeek.getDate() + i);
    return date;
  });

  return (
    <WeekViewWrapper>
      <WeekHeader>
        {dates.map((date, index) => (
          <DayHeader key={index}>
            <DayName isToday={isToday(date)}>
              <DateTitle>{formatDate(date)}</DateTitle>
              <DayTitle>{days[index]}</DayTitle>
            </DayName>
            <AllDayEventWrap>
              {allDayEvents
                .filter((event) => new Date(event.date).toDateString() === date.toDateString())
                .map((event) => (
                  <AllDayEvent color={event.color} key={event.id}>
                    <EventTitle>{event.title}</EventTitle>
                  </AllDayEvent>
                ))}
            </AllDayEventWrap>
          </DayHeader>
        ))}
      </WeekHeader>
      <WeekBody>
        <div className="hours">
          {Array.from({ length: 24 }).map((_, hour) => (
            <HourLabel key={hour}>{`${hour}:00`}</HourLabel>
          ))}
        </div>
        {dates.map((date, index) => (
          <DayColumn key={index}>
            {Array.from({ length: 24 }).map((_, hour) => (
              <HourSlot key={hour}>
                {weekEvents
                  .filter(
                    (event) =>
                      (new Date(event.date).toDateString() ===
                        date.toDateString() &&
                        !event.allDay)
                  )
                  .map((event) => {
                    const { hours: startHours } = parseTime(event.startTime);
                    const currentHour = hour;
                    if (currentHour === startHours) {
                      return (
                        <DayViewEvent
                          color={event.color}
                          key={event.id}
                          style={getEventStyle(event)}
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
              </HourSlot>
            ))}
          </DayColumn>
        ))}
      </WeekBody>
    </WeekViewWrapper>
  );
};

export default WeekView;
