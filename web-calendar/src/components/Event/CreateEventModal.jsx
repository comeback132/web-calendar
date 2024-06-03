import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import ColourPicker from '../ColourPicker/ColourPicker';
import DatePicker from '@/components/CustomDatePicker/DatePicker' 

const CreateEventModal = ({ onCreate, onClose }) => {
  const [title, setTitle] = useState('');
  const [color, setColor] = useState('#16AF6E');
  const [date,setDate]=useState(new Date());
  const [startTime, setStartTime]=useState('');
  const [endTime, setEndTime]=useState('');
  const [allDay, setAllDay]=useState(false);
  const [repeat, setRepeat]=useState('Does not repeat');
  const [calendarId, setCalendarId]=useState('default');

  const calendars = useSelector((state) => state.calendar.calendars);

  const handleSave = () => {
    onCreate({ title, color, date, startTime, endTime, allDay, repeat, calendarId });
  };

  return (
    <ModalOverlay>
      <Modal>
        <ModalHeader>
          <ModalTitle>Create event</ModalTitle>
          <CloseButton onClick={onClose}>X</CloseButton>
        </ModalHeader>
        <ModalBody>
          <Label>Title</Label>
          <Input type="text" value={title} onChange={e => setTitle(e.target.value)} />
          <Label>Date</Label>
          <DatePicker selectedDate={date} onDateChange={setDate}/>
          <Label>Time</Label>
          <TimeWrapper>
            <Input type="time" value={startTime} onChange={e => setStartTime(e.target.value)} />
            <span>to</span>
            <Input type="time" value={endTime} onChange={e => setEndTime(e.target.value)} />
          </TimeWrapper>
          <CheckboxWrapper>
            <Input type="checkbox" checked={allDay} onChange={e => setAllDay(e.target.checked)} />
            <Label>All day</Label>
          </CheckboxWrapper>
          <Label>Repeat</Label>
          <Select value={repeat} onChange={e => setRepeat(e.target.value)}>
            <option>Does not repeat</option>
            <option>Daily</option>
            <option>Weekly on {date.toLocaleDateString('en-US', { weekday: 'long' })}</option>
            <option>Monthly</option>
            <option>Annually on {date.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}</option>
          </Select>
          <Label>Calendar</Label>
          <Select value={calendarId} onChange={e => setCalendarId(e.target.value)}>
            {calendars.map(calendar => (
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
  width: 300px;
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
