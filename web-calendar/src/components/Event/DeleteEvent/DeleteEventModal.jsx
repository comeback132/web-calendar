import React from "react";
import { useDispatch } from "react-redux";
import { deleteEvent } from '@/features/calendar/calendarSlice';
import {
  ModalOverlay,
  Modal,
  ModalHeader,
  ModalTitle,
  CloseButton,
  ModalBody,
  ModalFooter,
  Button
} from "./DeleteEventModal.style";

const DeleteEventModal = ({ eventId, onClose, calendarId }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    console.log(`Deleting event with ID: ${eventId} from calendar: ${calendarId}`);
    dispatch(deleteEvent({ calendarId, eventId }));
    onClose();
  };

  return (
    <ModalOverlay>
      <Modal>
        <ModalHeader>
          <ModalTitle>Delete Event</ModalTitle>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </ModalHeader>
        <ModalBody>
          <p>Are you sure you want to delete this event?</p>
        </ModalBody>
        <ModalFooter>
          <Button onClick={handleDelete}>Delete</Button>
          <Button onClick={onClose} style={{ marginLeft: '10px' }}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </ModalOverlay>
  );
};

export default DeleteEventModal;
