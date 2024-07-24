import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  ModalOverlay,
  Modal,
  ModalHeader,
  ModalTitle,
  ModalBody,
  DatePickerWrapper,
  DateTimeWrapper,
  ModalFooter,
  ElementWrap,
  RepeatWrap,
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
import { timeOptions, repeatOptions } from "../../constants/constants";

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




  const calendars = useSelector((state) => state.calendar.calendars);
  const dispatch = useDispatch();
  const selectedDate = useSelector((state) => state.calendar.selectedDate);

  const handleDateChange = (date) => {
    setDate(date);
    dispatch(setSelectedDate(date.toString()));
  };
  const handleSave = () => {
    const event = {
      title,
      date,
      color,
      allDay,
      calendarId,
      repeatOption,
    };

    if (!allDay) {
      event.startTime = startTime;
      event.endTime = endTime;
    }

    dispatch(addEvent(event));
    onClose();
  };

  return (
    <ModalOverlay>
      <Modal>
        <ModalHeader>
          <ModalTitle>Create event</ModalTitle>
          <CustomButton icon='close' iconOnly onClick={onClose}>X</CustomButton>
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
            {!allDay && (
              <>
                <SelectMenu
                  title="Start Time"
                  options={timeOptions}
                  onChange={setStartTime}
                />
                <span style={{ position: "relative", top: "5px" }}>-</span>
                <SelectMenu
                  title="End Time"
                  options={timeOptions}
                  onChange={setEndTime}
                />
              </>
            )}
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
                setCalendarId(calendarId); 
                const selectedCalendar = calendars.find(
                  (calendar) => calendar.id === calendarId
                );
                console.log(selectedCalendar);
                setColor(selectedCalendar.color);
                setSelectedCalendar(selectedCalendar);
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
