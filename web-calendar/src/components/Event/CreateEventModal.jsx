import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  ModalOverlay,
  Modal,
  ModalHeader,
  ModalTitle,
  CloseButton,
  ModalBody,
  Label,
  DatePickerWrapper,
  DateTimeWrapper,
  Input,
  TimeWrapper,
  CheckboxWrapper,
  Select,
  Textarea,
  ModalFooter,
  SaveButton,
  ElementWrap,
  RepeatWrap
} from "./CreateEventModal.style";

import { setSelectedDate } from "@/features/calendar/calendarSlice";
import DatePicker from "@/components/CustomDatePicker/DatePicker";
import SelectMenu from "@/components/SelectMenu/SelectMenu";
import RepeatSelectMenu from "./RepeatSelectMenu";
import CalendarSelectMenu from "@/components/Event/CalendarSelectMenu";
import CustomInput from "@/components/CustomInput/CustomInput";
import Checkbox from "@/components/CheckBox/Checkbox";
import TextArea from "@/components/TextArea/TextArea";
import CustomButton from "@/components/CustomButton/CustomButton";
import { addEvent } from "@/features/calendar/calendarSlice";
import Icon from "@/components/Icon/Icon";
import titleIcon from "@/assets/titleIcon.png";
import clock from "@/assets/clock.png";
import calendarIcon from "@/assets/calendarIcon.png";
import description from "@/assets/pdescription.png";

const CreateEventModal = ({ onCreate, onClose }) => {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("#00AE1C");
  const [chooseDate, setChooseDate] = useState(false);
  const [date, setDate] = useState(new Date());
  const [startTime, setStartTime] = useState("12:30 pm");
  const [endTime, setEndTime] = useState("13:30 pm");
  const [allDay, setAllDay] = useState(false);
  const [calendarId, setCalendarId] = useState("default");
  const [selectedCalendar, setSelectedCalendar] = useState(null);
  const [repeatOption, setRepeatOption] = useState("Does not repeat");

  const timeOptions = [
    "00:00 am",
    "00:15 am",
    "00:30 am",
    "00:45 am",
    "01:00 am",
    "01:15 am",
    "01:30 am",
    "01:45 am",
    "02:00 am",
    "02:15 am",
    "02:30 am",
    "02:45 am",
    "03:00 am",
    "03:15 am",
    "03:30 am",
    "03:45 am",
    "04:00 am",
    "04:15 am",
    "04:30 am",
    "04:45 am",
    "05:00 am",
    "05:15 am",
    "05:30 am",
    "05:45 am",
    "06:00 am",
    "06:15 am",
    "06:30 am",
    "06:45 am",
    "07:00 am",
    "07:15 am",
    "07:30 am",
    "07:45 am",
    "08:00 am",
    "08:15 am",
    "08:30 am",
    "08:45 am",
    "09:00 am",
    "09:15 am",
    "09:30 am",
    "09:45 am",
    "10:00 am",
    "10:15 am",
    "10:30 am",
    "10:45 am",
    "11:00 am",
    "11:15 am",
    "11:30 am",
    "11:45 am",
    "12:00 pm",
    "12:15 pm",
    "12:30 pm",
    "12:45 pm",
    "13:00 pm",
    "13:15 pm",
    "13:30 pm",
    "13:45 pm",
    "14:00 pm",
    "14:15 pm",
    "14:30 pm",
    "14:45 pm",
    "15:00 pm",
    "15:15 pm",
    "15:30 pm",
    "15:45 pm",
    "16:00 pm",
    "16:15 pm",
    "16:30 pm",
    "16:45 pm",
    "17:00 pm",
    "17:15 pm",
    "17:30 pm",
    "17:45 pm",
    "18:00 pm",
    "18:15 pm",
    "18:30 pm",
    "18:45 pm",
    "19:00 pm",
    "19:15 pm",
    "19:30 pm",
    "19:45 pm",
    "20:00 pm",
    "20:15 pm",
    "20:30 pm",
    "20:45 pm",
    "21:00 pm",
    "21:15 pm",
    "21:30 pm",
    "21:45 pm",
    "22:00 pm",
    "22:15 pm",
    "22:30 pm",
    "22:45 pm",
    "23:00 pm",
    "23:15 pm",
    "23:30 pm",
    "23:45 pm",
  ];

  const repeatOptions = [
    "Does not repeat",
    "Daily",
    "Weekly",
    "Monthly",
    "Yearly",
  ];

  const calendars = useSelector((state) => state.calendar.calendars);
  const dispatch = useDispatch();
  const selectedDate = useSelector((state) => state.calendar.selectedDate);

  const handleDateChange = (date) => {
    setDate(date);
    dispatch(setSelectedDate(date.toString()));
  };
  const handleSave = () => {
    dispatch(
      addEvent({
        title,
        date,
        color,
        startTime,
        endTime,
        allDay,
        calendarId,
        repeatOption,
      })
    );
    onClose();
  };

  return (
    <ModalOverlay>
      <Modal>
        <ModalHeader>
          <ModalTitle>Create event</ModalTitle>
          <CloseButton onClick={onClose}>X</CloseButton>
        </ModalHeader>
        <ModalBody>
          <ElementWrap>
            <Icon src={titleIcon} />
            <CustomInput
              label="Title"
              placeholder="Enter title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </ElementWrap>
          <DateTimeWrapper>
            <Icon src={clock} />
            <CustomInput
              label="Date"
              onClick={() => setChooseDate(!chooseDate)}
              type="text"
              value={new Date(selectedDate).toDateString()}
              onChange={(e) => {}}
            />
            {chooseDate && (
              <DatePickerWrapper>
                <DatePicker
                  selectedDate={selectedDate}
                  onDateChange={(date) => {
                    setChooseDate(false);
                    handleDateChange(date);
                  }}
                />
              </DatePickerWrapper>
            )}
            <SelectMenu
              title="Time"
              options={timeOptions}
              onChange={setStartTime}
            ></SelectMenu>
            <span style={{ position: "relative", top: "5px" }}>-</span>
            <SelectMenu
              title="Time"
              options={timeOptions}
              onChange={setEndTime}
            ></SelectMenu>
          </DateTimeWrapper>
          <RepeatWrap>
            <Checkbox
              checked={allDay}
              text="All day"
              label="All day"
              onChange={(e) => setAllDay(e.target.checked)}
            />
            <RepeatSelectMenu
              options={repeatOptions}
              onChange={(option) => setRepeatOption(option)}
            />
          </RepeatWrap>
          <ElementWrap>
            <Icon src={calendarIcon} />
            <CalendarSelectMenu
              onChange={(calendarId) => {
                setCalendarId(calendarId); // Set calendarId state
                const selectedCalendar = calendars.find(
                  (calendar) => calendar.id === calendarId
                );
                console.log(selectedCalendar);
                setColor(selectedCalendar.color);
                setSelectedCalendar(selectedCalendar); // Set selected calendar state for display
              }}
              options={calendars}
              title="Calendar"
            />
          </ElementWrap>
          <ElementWrap>
            <Icon src={description} />
            <TextArea
              title="Description"
              children={"Enter description"}
            ></TextArea>
          </ElementWrap>
        </ModalBody>
        <ModalFooter>
          <CustomButton onClick={handleSave}>Save</CustomButton>
        </ModalFooter>
      </Modal>
    </ModalOverlay>
  );
};

export default CreateEventModal;
