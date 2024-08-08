import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedDate } from "@/features/calendar/calendarSlice";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import {
  HeaderContainer,
  Brand,
  BrandControlsWrap,
  DateDisplay,
  Controls,
} from "./style";
import CustomDropdown from "../DropDown/DropDown";
import CustomIcon from "@/components/Icon/Icon";
import CustomButton from "@/components/CustomButton/CustomButton";
import left from "@/assets/arrow-left.png";
import right from "@/assets/arrow-right.png";
import logo from "@/assets/Logo.png";
import { DatePickerWrapper } from "@/components/Event/CreateEvent/CreateEventModal.style";
import DatePicker from "@/components/CustomDatePicker/DatePicker";

const Header = () => {
  const dispatch = useDispatch();
  const selectedDate = useSelector((state) => state.calendar.selectedDate);
  const navigate = useNavigate();

  const [chooseDate, setChooseDate] = useState(false);
  const [date, setDate] = useState(new Date(selectedDate));

  useEffect(() => {
    // Sync local date state with selectedDate from Redux store
    setDate(new Date(selectedDate));
  }, [selectedDate]);

  const handlePrevDay = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(newDate.getDate() - 1);
    dispatch(setSelectedDate(newDate.toISOString()));
  };

  const handleNextDay = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(newDate.getDate() + 1);
    dispatch(setSelectedDate(newDate.toISOString()));
  };

  const handleToday = () => {
    dispatch(setSelectedDate(new Date().toISOString()));
  };

  const handleViewChange = (view) => {
    navigate(view.toLowerCase());
  };

  const handleDateChange = (newDate) => {
    setChooseDate(false);
    dispatch(setSelectedDate(newDate.toISOString()));
  };

  return (
    <HeaderContainer>
      <BrandControlsWrap>
        <Brand>
          <CustomIcon src={logo} />
          <h1>Web Calendar</h1>
        </Brand>
        <Controls>
          <CustomButton onClick={handleToday}>Today</CustomButton>
          <CustomButton $secondary={true} $withIcon={true} onClick={handlePrevDay}>
            <img src={left} alt="left" />
          </CustomButton>
          <CustomButton $secondary={true} $withIcon={true} onClick={handleNextDay}>
            <img src={right} alt="right" />
          </CustomButton>
          <DateDisplay onClick={() => setChooseDate(!chooseDate)}>
            {format(new Date(selectedDate), "MMMM dd, yyyy")}
            {chooseDate && (
              <DatePickerWrapper style={{ position: "absolute", top: '50px',zIndex:'1000' }}>
                <DatePicker
                  selectedDate={new Date(selectedDate)}
                  onDateChange={handleDateChange}
                />
              </DatePickerWrapper>
            )}
          </DateDisplay>
        </Controls>
      </BrandControlsWrap>
      <Controls>
        <CustomDropdown onOptionClicked={handleViewChange} />
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          Username
          <CustomButton $secondary={true}>U</CustomButton>
        </div>
      </Controls>
    </HeaderContainer>
  );
};

export default Header;

