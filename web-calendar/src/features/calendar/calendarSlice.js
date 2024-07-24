import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  calendars: [
    {
      id: 'default',
      name: 'Default Calendar',
      color: '#00AE1C',
      events: [],
      selected: true,
    },
  ],
  selectedDate: new Date(),
};

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    addEvent: (state, action) => {
      const { title, color, date, startTime, endTime, allDay, calendarId, repeatOption } = action.payload;
      const calendar = state.calendars.find(cal => cal.id === calendarId);

      let events = [{
        id: Date.now().toString(),
        title,
        color,
        date: date.toString(),
        startTime,
        endTime,
        allDay,
      }];

      if (repeatOption !== 'Does not repeat') {
        const repeatedEvents = generateRepeatedEvents(action.payload);
        events = events.concat(repeatedEvents);
      }

      if (calendar) {
        calendar.events.push(...events);
      }
    },
    editCalendar: (state, action) => {
      const { calendarId, updatedCalendar } = action.payload;
      const calendarIndex = state.calendars.findIndex(cal => cal.id === calendarId);
      if (calendarIndex >= 0) {
        state.calendars[calendarIndex] = { ...state.calendars[calendarIndex], ...updatedCalendar };
      }
    },
    deleteEvent: (state, action) => {
      const { calendarId, eventId } = action.payload;
      const calendar = state.calendars.find(cal => cal.id === calendarId);
      if (calendar) {
        calendar.events = calendar.events.filter(ev => ev.id !== eventId);
      }
    },
    addCalendar: (state, action) => {
      state.calendars.push(action.payload);
    },
    editCalendar: (state, action) => {
      const { calendarId, updatedCalendar } = action.payload;
      const calendarIndex = state.calendars.findIndex(cal => cal.id === calendarId);
      if (calendarIndex >= 0) {
        state.calendars[calendarIndex] = { ...state.calendars[calendarIndex], ...updatedCalendar };
      }
    },
    deleteCalendar: (state, action) => {
      state.calendars = state.calendars.filter(cal => cal.id !== action.payload);
    },
    setSelectedDate: (state, action) => {
      state.selectedDate = action.payload;
    },
    toggleCalendarSelection: (state, action) => {
      const calendar = state.calendars.find(cal => cal.id === action.payload);
      if (calendar) {
        calendar.selected = !calendar.selected;
      }
    },
  },
});

export const {
  addEvent,
  editEvent,
  deleteEvent,
  addCalendar,
  editCalendar,
  deleteCalendar,
  setSelectedDate,
  toggleCalendarSelection,
} = calendarSlice.actions;

export default calendarSlice.reducer;

const generateRepeatedEvents = (event) => {
  const { date, repeatOption, ...rest } = event;
  let repeatedEvents = [];
  let currentDate = new Date(date);

  const addEvent = (date) => ({
    ...rest,
    id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
    date: date.toString(),
  });

  switch (repeatOption) {
    case 'Daily':
      for (let i = 1; i <= 365; i++) {
        currentDate.setDate(currentDate.getDate() + 1);
        repeatedEvents.push(addEvent(new Date(currentDate)));
      }
      break;
    case 'Weekly':
      for (let i = 1; i <= 52; i++) {
        currentDate.setDate(currentDate.getDate() + 7);
        repeatedEvents.push(addEvent(new Date(currentDate)));
      }
      break;
    case 'Monthly':
      for (let i = 1; i <= 12; i++) {
        currentDate.setMonth(currentDate.getMonth() + 1);
        repeatedEvents.push(addEvent(new Date(currentDate)));
      }
      break;
    case 'Yearly':
      for (let i = 1; i <= 5; i++) {
        currentDate.setFullYear(currentDate.getFullYear() + 1);
        repeatedEvents.push(addEvent(new Date(currentDate)));
      }
      break;
    default:
      break;
  }

  return repeatedEvents;
};
