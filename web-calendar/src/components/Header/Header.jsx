import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedDate } from '@/features/calendar/calendarSlice';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import { HeaderContainer,Brand,BrandControlsWrap,DateDisplay,Controls } from './style';
import CustomDropdown from '../DropDown/DropDown';
import CustomIcon from "@/components/Icon/Icon";
import CustomButton from '@/components/CustomButton/CustomButton';
import left from '@/assets/arrow-left.png';
import right from '@/assets/arrow-right.png';
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
        <BrandControlsWrap>
          <Brand>
            <CustomIcon src={logo}/>
            <h1>Web Calendar</h1>
          </Brand>
          <Controls>
            <CustomButton onClick={handleToday}>Today</CustomButton>
            <CustomButton secondary withIcon onClick={handlePrevDay}>
              <img src={left} alt="left" />
            </CustomButton>
            <CustomButton secondary withIcon onClick={handleNextDay}>
              <img src={right} alt="right" />
            </CustomButton>
            <DateDisplay>{format(selectedDate, 'MMMM dd, yyyy')}</DateDisplay>
          </Controls>
        </BrandControlsWrap>
        <Controls>
            <CustomDropdown /> {/* Add the CustomDropdown */}
            <div>
                Username
                <CustomButton secondary>
                  U
                </CustomButton>
            </div>
        </Controls>
      </HeaderContainer>
    );
  };
  
  export default Header;