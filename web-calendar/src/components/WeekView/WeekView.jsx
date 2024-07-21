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

const parseTime = (time) => {
  if (!time) return { hours: 0, minutes: 0 }; // Default to 0 hours and 0 minutes if time is undefined
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
  const startTimeInMinutes = startHours * 60 + startMinutes;
  const endTimeInMinutes = endHours * 60 + endMinutes;
  const durationInMinutes = endTimeInMinutes - startTimeInMinutes;

  return {
    top: `${(startMinutes / 60) * 60}px`,
    height: `${durationInMinutes}px`,
  };
};

const getStartOfWeek = (date) => {
  const day = date.getDay();
  const diff = date.getDate() - day + (day === 0 ? -6 : 1);
  return new Date(date.setDate(diff));
};

const getEndOfWeek = (date) => {
  const startOfWeek = getStartOfWeek(new Date(date));
  return new Date(startOfWeek.setDate(startOfWeek.getDate() + 7));
};

const formatDate = (date) => {
  const options = { day: "numeric" };
  return new Intl.DateTimeFormat("en-US", options).format(date);
};

const isToday = (date) => {
  const today = new Date();
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
};

const WeekView = () => {
  const calendars = useSelector((state) => state.calendar.calendars);
   // Filter selected calendars
   const selectedCalendars = calendars.filter((calendar) => calendar.selected);
  
   // Combine events from selected calendars
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
  console.log(allDayEvents);

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
