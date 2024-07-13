import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { setSelectedDate } from '@/features/calendar/calendarSlice';
import Header from '@/components/Header/Header';
import CalendarView from '@/features/calendar/CalendarView';
import DayView from '@/components/DayView/DayView';
import WeekView from './components/WeekView/WeekView';
import CalendarList from '@/components/CalendarList/CalendarList';
import CustomDatePicker from '@/components/CustomDatePicker/DatePicker';
import CustomButton from '@/components/CustomButton/CustomButton';
import plus from '@/assets/plus.png';
import './App.css'
import { addEvent } from './features/calendar/calendarSlice';
import CreateEventModal from './components/Event/CreateEventModal';

const App = () => {
  const dispatch = useDispatch();
  const selectedDate = useSelector((state) => state.calendar.selectedDate);
  const [showCreateEventModal,setShowCreateEventModal]=useState(false);

  const handleDateChange = (date) => {
    dispatch(setSelectedDate(date));
  };

  const handleCreateEvent=(title,color)=>{
    const event={
      id:Date.now().toString(),
      title,
      date:selectedDate,
      color,
    }
    dispatch(addEvent({calendarId:'default',event}));
    setShowCreateEventModal(false);
  }

  return (
      <Router>
        <Header />
        <div className='app'>
          <div className='leftwrap'>
            <CustomButton onClick={() => setShowCreateEventModal(true)} primary withIcon>
              <img src={plus} alt="plus" />
              Create
            </CustomButton>
            <CalendarList/>
            <CustomDatePicker selectedDate={selectedDate} onDateChange={handleDateChange} />
          </div>
          <div className="calendar-views">
            <Routes>
              <Route path="/" element={<DayView />} />
              <Route path="/day" element={<DayView />} />
              <Route path="/week" element={<WeekView />} />
            </Routes>
          </div>
        </div>
        {showCreateEventModal&&(
          <CreateEventModal
            onCreate={handleCreateEvent}
            onClose={()=>setShowCreateEventModal(false)}
          />
        )}
      </Router>
  );
};

export default App;


