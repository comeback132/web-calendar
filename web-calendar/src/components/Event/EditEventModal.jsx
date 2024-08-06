import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editEvent } from '@/features/calendar/calendarSlice';
import {
  ModalOverlay,
  Modal,
  ModalHeader,
  ModalTitle,
  CloseButton,
  ModalBody,
  ModalFooter,
  Input,
  Label,
  Button
} from "./EditEventModal.style";

const EditEventModal = ({ event, onClose }) => {
  const [title, setTitle] = useState(event.title);
  const [startTime, setStartTime] = useState(event.startTime);
  const [endTime, setEndTime] = useState(event.endTime);
  const [color, setColor] = useState(event.color);
  const [allDay, setAllDay] = useState(event.allDay);
  const dispatch = useDispatch();

  const handleSave = () => {
    dispatch(editEvent({ ...event, title, startTime, endTime, color, allDay }));
    onClose();
  };

  return (
    <ModalOverlay>
      <Modal>
        <ModalHeader>
          <ModalTitle>Edit Event</ModalTitle>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </ModalHeader>
        <ModalBody>
          <Label>Title</Label>
          <Input value={title} onChange={(e) => setTitle(e.target.value)} />
          <Label>Start Time</Label>
          <Input value={startTime} onChange={(e) => setStartTime(e.target.value)} />
          <Label>End Time</Label>
          <Input value={endTime} onChange={(e) => setEndTime(e.target.value)} />
          <Label>Color</Label>
          <Input value={color} onChange={(e) => setColor(e.target.value)} type="color" />
          <Label>
            <input type="checkbox" checked={allDay} onChange={() => setAllDay(!allDay)} /> All Day
          </Label>
        </ModalBody>
        <ModalFooter>
          <Button onClick={handleSave}>Save</Button>
        </ModalFooter>
      </Modal>
    </ModalOverlay>
  );
};

export default EditEventModal;
