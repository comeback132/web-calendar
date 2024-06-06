import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { setSelectedDate } from '@/features/calendar/calendarSlice';
import ColourPicker from "../ColourPicker/ColourPicker";
import DatePicker from "@/components/CustomDatePicker/DatePicker";
import SelectMenu from "@/components/SelectMenu/SelectMenu";
import CustomInput from "@/components/CustomInput/CustomInput";
import Checkbox from '@/components/CheckBox/Checkbox';

const CreateEventModal = ({ onCreate, onClose }) => {
  const [title, setTitle] = useState("");
  const [chooseDate, setChooseDate] = useState(false);
  const [date, setDate] = useState(new Date());
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [allDay, setAllDay] = useState(false);
  const [calendarId, setCalendarId] = useState("default");

  const timeOptions = ["00:00 am", "00:15 am", "00:30 am", "00:45 am",
  "01:00 am", "01:15 am", "01:30 am", "01:45 am",
  "02:00 am", "02:15 am", "02:30 am", "02:45 am",
  "03:00 am", "03:15 am", "03:30 am", "03:45 am",
  "04:00 am", "04:15 am", "04:30 am", "04:45 am",
  "05:00 am", "05:15 am", "05:30 am", "05:45 am",
  "06:00 am", "06:15 am", "06:30 am", "06:45 am",
  "07:00 am", "07:15 am", "07:30 am", "07:45 am",
  "08:00 am", "08:15 am", "08:30 am", "08:45 am",
  "09:00 am", "09:15 am", "09:30 am", "09:45 am",
  "10:00 am", "10:15 am", "10:30 am", "10:45 am",
  "11:00 am", "11:15 am", "11:30 am", "11:45 am",
  "12:00 pm", "12:15 pm", "12:30 pm", "12:45 pm",
  "13:00 pm", "13:15 pm", "13:30 pm", "13:45 pm",
  "14:00 pm", "14:15 pm", "14:30 pm", "14:45 pm",
  "15:00 pm", "15:15 pm", "15:30 pm", "15:45 pm",
  "16:00 pm", "16:15 pm", "16:30 pm", "16:45 pm",
  "17:00 pm", "17:15 pm", "17:30 pm", "17:45 pm",
  "18:00 pm", "18:15 pm", "18:30 pm", "18:45 pm",
  "19:00 pm", "19:15 pm", "19:30 pm", "19:45 pm",
  "20:00 pm", "20:15 pm", "20:30 pm", "20:45 pm",
  "21:00 pm", "21:15 pm", "21:30 pm", "21:45 pm",
  "22:00 pm", "22:15 pm", "22:30 pm", "22:45 pm",
  "23:00 pm", "23:15 pm", "23:30 pm", "23:45 pm"];
  

  const calendars = useSelector((state) => state.calendar.calendars);
  const dispatch = useDispatch();
  const selectedDate = useSelector((state) => state.calendar.selectedDate);

  const handleDateChange = (date) => {
    dispatch(setSelectedDate(date));
  };
  const handleSave = () => {
    onCreate({
      title,
      color,
      date,
      startTime,
      endTime,
      allDay,
      repeat,
      calendarId,
    });
  };

  return (
    <ModalOverlay>
      <Modal>
        <ModalHeader>
          <ModalTitle>Create event</ModalTitle>
          <CloseButton onClick={onClose}>X</CloseButton>
        </ModalHeader>
        <ModalBody>
          <CustomInput
            label="Title"
            placeholder="Title121323"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <DateTimeWrapper>
            <CustomInput
              label="Date"
              onClick={() => setChooseDate(!chooseDate)}
              type="text"           
              value={new Date(selectedDate).toDateString()}
              onChange={(e) => {}}
            />
            {chooseDate && (
              <DatePickerWrapper>
                <DatePicker selectedDate={selectedDate} onDateChange={(date) => {setChooseDate(false); handleDateChange(date)}}/>
              </DatePickerWrapper>
            )}
            <SelectMenu title="Time" options={timeOptions} onChange={setStartTime}></SelectMenu>
            <span>-</span>
            <SelectMenu title="Time" options={timeOptions} onChange={setEndTime}></SelectMenu>
          </DateTimeWrapper>
            <Checkbox checked={allDay} text='All day' label='All day' onChange={(e) => setAllDay(e.target.checked)}/>
          <Label>Calendar</Label>
          <Select
            value={calendarId}
            onChange={(e) => setCalendarId(e.target.value)}
          >
            {calendars.map((calendar) => (
              <option key={calendar.id} value={calendar.id}>
                {calendar.name}
              </option>
            ))}
          </Select>
          <Label>Description</Label>
          <Textarea rows="4" />
        </ModalBody>
        <ModalFooter>
          <SaveButton onClick={handleSave}>Save</SaveButton>
        </ModalFooter>
      </Modal>
    </ModalOverlay>
  );
};

export default CreateEventModal;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Modal = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 522px;
  height: 446px;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #dedfe5;
  padding-bottom: 10px;
`;

const ModalTitle = styled.h4`
  margin: 0;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const ModalBody = styled.div`
  margin: 20px 0;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;
const DatePickerWrapper = styled.div`
  position: absolute;
`;

const DateTimeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #dedfe5;
  border-radius: 4px;
  margin-bottom: 10px;
`;

const TimeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Select = styled.select`
  width: 100%;
  padding: 8px;
  border: 1px solid #dedfe5;
  border-radius: 4px;
  margin-bottom: 10px;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 8px;
  border: 1px solid #dedfe5;
  border-radius: 4px;
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const SaveButton = styled.button`
  background-color: #16af6e;
  border: none;
  border-radius: 4px;
  color: white;
  padding: 8px 16px;
  cursor: pointer;
`;
