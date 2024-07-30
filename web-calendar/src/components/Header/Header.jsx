import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
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
import { DatePickerWrapper } from "../Event/CreateEventModal.style";
import DatePicker from "@/components/CustomDatePicker/DatePicker";

const Header = () => {
  const dispatch = useDispatch();
  const selectedDate = useSelector((state) => state.calendar.selectedDate);
  const navigate = useNavigate();

  const [chooseDate, setChooseDate] = useState(false);
  const [date, setDate] = useState(new Date());

  const handlePrevDay = () => {
    dispatch(
      setSelectedDate(
        new Date(selectedDate.setDate(selectedDate.getDate() - 1))
      )
    );
  };

  const handleNextDay = () => {
    dispatch(
      setSelectedDate(
        new Date(selectedDate.setDate(selectedDate.getDate() + 1))
      )
    );
  };

  const handleToday = () => {
    dispatch(setSelectedDate(new Date()));
  };

  const handleViewChange = (view) => {
    navigate(view.toLowerCase());
  };
  const handleDateChange = (date) => {
    setDate(date);
    dispatch(setSelectedDate(date.toString()));
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
          <CustomButton secondary withIcon onClick={handlePrevDay}>
            <img src={left} alt="left" />
          </CustomButton>
          <CustomButton secondary withIcon onClick={handleNextDay}>
            <img src={right} alt="right" />
          </CustomButton>
          <DateDisplay onClick={() => setChooseDate(!chooseDate)}>
            {format(selectedDate, "MMMM dd, yyyy")}
            {chooseDate && (
              <DatePickerWrapper style={{ position: "relative",right:'100px' }}>
                <DatePicker
                  selectedDate={selectedDate}
                  onDateChange={(date) => {
                    setChooseDate(false);
                    handleDateChange(date);
                  }}
                />
              </DatePickerWrapper>
            )}
          </DateDisplay>
        </Controls>
      </BrandControlsWrap>
      <Controls>
        <CustomDropdown onOptionClicked={handleViewChange} />{" "}
        {/* Pass the callback */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          Username
          <CustomButton secondary>U</CustomButton>
        </div>
      </Controls>
    </HeaderContainer>
  );
};

export default Header;
