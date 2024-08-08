import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { format } from 'date-fns';
import { editEvent } from "@/features/calendar/calendarSlice";
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
import { ErrorMessage } from "../CustomInput/style";
import { setSelectedDate } from "@/features/calendar/calendarSlice";
import DatePicker from "@/components/CustomDatePicker/DatePicker";
import SelectMenu from "@/components/SelectMenu/SelectMenu";
import RepeatSelectMenu from "./RepeatSelectMenu";
import CalendarSelectMenu from "@/components/Event/CalendarSelectMenu";
import CustomInput from "@/components/CustomInput/CustomInput";
import Checkbox from "@/components/CheckBox/Checkbox";
import TextArea from "@/components/TextArea/TextArea";
import CustomButton from "@/components/CustomButton/CustomButton";
import Icon from "@/components/Icon/Icon";
import titleIcon from "@/assets/titleIcon.png";
import clock from "@/assets/clock.png";
import calendarIcon from "@/assets/calendarIcon.png";
import description from "@/assets/pdescription.png";
import {
  timeOptions,
  repeatOptions,
  eventTimeOptions,
} from "../../constants/constants";

const EditEventModal = ({ event, onClose }) => {
  const [title, setTitle] = useState(event.title);
  const [color, setColor] = useState(event.color);
  const [date, setDate] = useState(new Date(event.date));
  const [startTime, setStartTime] = useState(event.startTime);
  const [endTime, setEndTime] = useState(event.endTime);
  const [allDay, setAllDay] = useState(event.allDay);
  const [calendarId, setCalendarId] = useState(event.calendarId);
  const [repeatOption, setRepeatOption] = useState(event.repeatOption);
  const [descriptionText, setDescriptionText] = useState(event.description || "");
  const [chooseDate, setChooseDate] = useState(false);
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();
  const calendars = useSelector((state) => state.calendar.calendars);
  const selectedDate = useSelector((state) => state.calendar.selectedDate);
  const dateToFormat = new Date(selectedDate);
  const formattedDate = format(dateToFormat, 'eeee, MMMM d');

  const handleDateChange = (date) => {
    setDate(date);
    dispatch(setSelectedDate(date.toString()));
  };

  const validateFields = () => {
    const newErrors = {};

    if (title.trim() === "") {
      newErrors.title = "Title is required";
    }
    if (!date) {
      newErrors.date = "Date is required";
    }
    if (!allDay && (startTime.trim() === "" || endTime.trim() === "")) {
      newErrors.time = "Start and end times are required";
    }
    if (!calendarId) {
      newErrors.calendarId = "Calendar is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (!validateFields()) {
      return;
    }

    const updatedEvent = {
      ...event,
      title,
      date,
      color,
      startTime,
      endTime,
      allDay,
      calendarId,
      repeatOption,
      description: descriptionText,
    };

    dispatch(editEvent(updatedEvent));
    onClose();
  };

  return (
    <ModalOverlay>
      <Modal>
        <ModalHeader>
          <ModalTitle>Edit Event</ModalTitle>
          <CustomButton icon="close" $iconOnly onClick={onClose} style={{ background: "transparent", width: "auto"}} />
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
              error={errors.title}
            />
            {errors.title && <ErrorMessage></ErrorMessage>}
          </ElementWrap>
          <DateTimeWrapper
            style={{
              paddingTop: allDay ? "16px" : "",
            }}
          >
            <Icon src={clock} style={{ position:'relative',top: "5px" }} />
            <CustomInput
              label="Date"
              onClick={() => setChooseDate(!chooseDate)}
              type="text"
              style={{ cursor: "pointer" }}
              value={formattedDate}
              onChange={() => {}}
              error={errors.date}
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
            {errors.date && <ErrorMessage>{errors.date}</ErrorMessage>}
            {!allDay && (
              <>
                <SelectMenu
                  title="Start Time"
                  options={eventTimeOptions}
                  value={startTime}
                  onChange={setStartTime}
                  error={errors.time}
                />
                <span style={{ position: "relative", top: "5px" }}>-</span>
                <SelectMenu
                  title="End Time"
                  options={eventTimeOptions}
                  value={endTime}
                  onChange={setEndTime}
                  error={errors.time}
                />
                {errors.time && <ErrorMessage>{errors.time}</ErrorMessage>}
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
              value={repeatOption}
              onChange={(option) => setRepeatOption(option)}
            />
          </RepeatWrap>
          <ElementWrap>
            <Icon src={calendarIcon} />
            <CalendarSelectMenu
              value={calendarId}
              onChange={(calendarId) => {
                setCalendarId(calendarId);
                const selectedCalendar = calendars.find(
                  (calendar) => calendar.id === calendarId
                );
                setColor(selectedCalendar.color);
              }}
              options={calendars}
              title="Calendar"
              error={errors.calendarId}
            />
            {errors.calendarId && (
              <ErrorMessage>{errors.calendarId}</ErrorMessage>
            )}
          </ElementWrap>
          <ElementWrap>
            <Icon src={description} />
            <TextArea
              title="Description"
              placeholder="Enter description"
              value={descriptionText}
              onChange={(e) => setDescriptionText(e.target.value)}
            />
          </ElementWrap>
        </ModalBody>
        <ModalFooter>
          <CustomButton onClick={handleSave}>Save</CustomButton>
        </ModalFooter>
      </Modal>
    </ModalOverlay>
  );
};

export default EditEventModal;

