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
import { parseTime, getEventStyle, getStartOfWeek, getEndOfWeek, formatDate, isToday } from "../../helpers/helpers";
import { timeOptions } from "../../constants/constants";

// Function to calculate overlapping events
const calculateOverlappingEvents = (events) => {
  const sortedEvents = events.sort((a, b) => {
    const aStart = parseTime(a.startTime).hours * 60 + parseTime(a.startTime).minutes;
    const bStart = parseTime(b.startTime).hours * 60 + parseTime(b.startTime).minutes;
    return aStart - bStart;
  });

  const overlappingGroups = [];
  let currentGroup = [];

  sortedEvents.forEach((event, index) => {
    if (currentGroup.length === 0) {
      currentGroup.push(event);
    } else {
      const lastEventInGroup = currentGroup[currentGroup.length - 1];
      const lastEventEnd = parseTime(lastEventInGroup.endTime).hours * 60 + parseTime(lastEventInGroup.endTime).minutes;
      const eventStart = parseTime(event.startTime).hours * 60 + parseTime(event.startTime).minutes;

      if (eventStart < lastEventEnd) {
        currentGroup.push(event);
      } else {
        overlappingGroups.push(currentGroup);
        currentGroup = [event];
      }
    }

    if (index === sortedEvents.length - 1 && currentGroup.length > 0) {
      overlappingGroups.push(currentGroup);
    }
  });

  return overlappingGroups;
};

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
            <DayName $istoday={isToday(date)}>
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
          {timeOptions.map((hour) => (
            <HourLabel key={hour}>{hour}</HourLabel>
          ))}
        </div>
        {dates.map((date, index) => (
          <DayColumn key={index}>
            {timeOptions.map((hour) => (
              <HourSlot key={hour}>
                {calculateOverlappingEvents(weekEvents
                  .filter(
                    (event) =>
                      (new Date(event.date).toDateString() === date.toDateString() &&
                        !event.allDay)
                  )).map((group) => {
                    return group.map((event, idx) => {
                      const { hours: startHours } = parseTime(event.startTime);
                      const currentHour = parseTime(hour).hours;
                      if (currentHour === startHours) {
                        const groupSize = group.length;
                        const width = 100 / groupSize;
                        const left = width * idx;

                        return (
                          <DayViewEvent
                            color={event.color}
                            key={event.id}
                            style={{
                              ...getEventStyle(event),
                              width: `${width}%`,
                              left: `${left}%`,
                              boxSizing: 'border-box',  // Ensure padding and border are included in width calculation
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
                    });
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
