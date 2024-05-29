import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  calendars: [
    {
      id: 'default',
      name: 'Default Calendar',
      color: '#00AE1C',
      events: [],
    },
  ],
  selectedDate: new Date(),
};

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    addEvent: (state, action) => {
      const { calendarId, event } = action.payload;
      const calendar = state.calendars.find(cal => cal.id === calendarId);
      if (calendar) {
        calendar.events.push(event);
      }
    },
    editEvent: (state, action) => {
      const { calendarId, eventId, updatedEvent } = action.payload;
      const calendar = state.calendars.find(cal => cal.id === calendarId);
      if (calendar) {
        const eventIndex = calendar.events.findIndex(ev => ev.id === eventId);
        if (eventIndex >= 0) {
          calendar.events[eventIndex] = { ...calendar.events[eventIndex], ...updatedEvent };
        }
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
} = calendarSlice.actions;

export default calendarSlice.reducer;
