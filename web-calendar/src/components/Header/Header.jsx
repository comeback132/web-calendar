import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedDate } from '@/features/calendar/calendarSlice';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import { HeaderContainer,Brand,Button,DateDisplay,Controls } from './style';
import CustomDropdown from '../DropDown/DropDown';
import CustomIcon from "@/components/Icon/Icon";
import logo from "@/assets/Logo.png";

const Header = () => {
    const dispatch = useDispatch();
    const selectedDate = useSelector((state) => state.calendar.selectedDate);
  
    const handlePrevDay = () => {
      dispatch(setSelectedDate(new Date(selectedDate.setDate(selectedDate.getDate() - 1))));
    };
  
    const handleNextDay = () => {
      dispatch(setSelectedDate(new Date(selectedDate.setDate(selectedDate.getDate() + 1))));
    };
  
    const handleToday = () => {
      dispatch(setSelectedDate(new Date()));
    };
  
    return (
      <HeaderContainer>
        <Brand>
          <CustomIcon src={logo}/>
          <h1>Brand Name</h1>
        </Brand>
        <Controls>
          <Button onClick={handleToday}>Today</Button>
          <Button onClick={handlePrevDay}>&lt;</Button>
          <Button onClick={handleNextDay}>&gt;</Button>
          <DateDisplay>{format(selectedDate, 'MMMM dd, yyyy')}</DateDisplay>
        </Controls>
        <Controls>
            <CustomDropdown title="View" /> {/* Add the CustomDropdown */}
            <div>
                Username
                <button>Login/Logout</button>
            </div>
        </Controls>
      </HeaderContainer>
    );
  };
  
  export default Header;