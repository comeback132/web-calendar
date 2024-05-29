import React from 'react';
import { Provider } from 'react-redux';
import store from '@/app/store';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '@/components/Header/Header';
import CalendarView from '@/features/calendar/CalendarView';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <div className="app">
          <Routes>
            <Route path="/" element={<CalendarView />} />
            <Route path="/week" element={<div>Week View (to be implemented)</div>} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;


