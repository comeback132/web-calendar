import React, { useState } from "react";
import { useSelector } from "react-redux";
import EventInfoModal from "@/components/Event/EventInfo/EventInfoModal";
import { parseTime, getEventStyle } from "../../helpers/helpers";
import {timeOptions} from "../../constants/constants";
import {
  DayViewWrapper,
  DayViewHeader,
  DayViewBody,
  DayViewHour,
  HourLabel,
  HourEvents,
  DayViewEvent,
  EventTitle,
  EventTime,
  AllDayEventWrap,
  AllDayEvent,
  TodayDate,
} from "./style";

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

const DayView = () => {
  const calendars = useSelector((state) => state.calendar.calendars);
  const selectedCalendars = calendars.filter((calendar) => calendar.selected);
  const allEvents = selectedCalendars.reduce((acc, calendar) => acc.concat(calendar.events), []);
  const selectedDate = useSelector((state) => state.calendar.selectedDate);
  const dayEvents = allEvents.filter(
    (event) => new Date(event.date).toDateString() === new Date(selectedDate).toDateString()
  );
  const allDayEvents = dayEvents.filter((event) => event.allDay === true);
  const overlappingEventGroups = calculateOverlappingEvents(dayEvents.filter((event) => !event.allDay));
  const [showEventInfoModal, setShowEventInfoModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedCalendarEvent, setSelectedCalendarEvent] = useState(null);
  console.log(selectedEvent);
  const handleEventClick = (event, calendarId) => {
    setSelectedEvent(event);

    setShowEventInfoModal(true);
  };

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
              {overlappingEventGroups.map((group) =>
                group.map((event, index) => {
                  const { hours: startHours } = parseTime(event.startTime);
                  const currentHour = parseTime(hour).hours;
                  if (currentHour === startHours) {
                    const groupSize = group.length;
                    const width = 100 / groupSize;
                    const left = width * index;

                    return (
                      <DayViewEvent
                        color={event.color}
                        key={event.id}
                        onClick={() => handleEventClick(event)}
                        style={{
                          ...getEventStyle(event),
                          width: `${width}%`,
                          left: `${left}%`,
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
                })
              )}
            </HourEvents>
          </DayViewHour>
        ))}
      </DayViewBody>
      {showEventInfoModal && (
        <EventInfoModal
          event={selectedEvent}
          calendarId={selectedCalendars.find(
            (calendar) => calendar.id === selectedEvent.calendarId
          ).id}
          onClose={() => setShowEventInfoModal(false)}
        />
      )}
    </DayViewWrapper>
  );
};

export default DayView;
