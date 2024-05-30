import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { setSelectedDate } from '@/features/calendar/calendarSlice';
import Header from '@/components/Header/Header';
import CalendarView from '@/features/calendar/CalendarView';
import CalendarList from '@/components/CalendarList/CalendarList';
import CustomDatePicker from '@/components/CustomDatePicker/DatePicker';
import CustomButton from '@/components/CustomButton/CustomButton';
import plus from '@/assets/plus.png';

const App = () => {
  const dispatch = useDispatch();
  const selectedDate = useSelector((state) => state.calendar.selectedDate);

  const handleDateChange = (date) => {
    dispatch(setSelectedDate(date));
  };
  return (
      <Router>
        <Header />
        <div className='leftwrap'>
          <CustomButton primary withIcon>
            <img src={plus} alt="plus" />
            Create
          </CustomButton>
          <CalendarList/>
          <CustomDatePicker selectedDate={selectedDate} onDateChange={handleDateChange} />
        </div>
        <div className="app">
          <Routes>
            <Route path="/" element={<CalendarView />} />
            <Route path="/week" element={<div>Week View (to be implemented)</div>} />
          </Routes>
        </div>
      </Router>
  );
};

export default App;


