import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteEvent } from '@/features/calendar/calendarSlice';
import EditEventModal from "./EditEventModal";
import DeleteEventModal from "./DeleteEventModal";
import {
  ModalOverlay,
  Modal,
  ModalHeader,
  ModalTitle,
  CloseButton,
  ModalBody,
  ModalFooter,
  EventDetail,
  EventActions,
  EventButton
} from "./EventInfoModal.style";

const EventInfoModal = ({ event, onClose }) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleDelete = () => {
    setShowDeleteModal(true);
  };

  const handleEdit = () => {
    setShowEditModal(true);
  };

  return (
    <>
      <ModalOverlay>
        <Modal>
          <ModalHeader>
            <ModalTitle>Event Information</ModalTitle>
            <CloseButton onClick={onClose}>&times;</CloseButton>
          </ModalHeader>
          <ModalBody>
            <EventDetail><strong>Title:</strong> {event.title}</EventDetail>
            <EventDetail><strong>Date:</strong> {new Date(event.date).toDateString()}</EventDetail>
            <EventDetail><strong>Time:</strong> {event.startTime} - {event.endTime}</EventDetail>
            <EventDetail><strong>All Day:</strong> {event.allDay ? "Yes" : "No"}</EventDetail>
            <EventDetail><strong>Color:</strong> <span style={{ backgroundColor: event.color }}>{event.color}</span></EventDetail>
          </ModalBody>
          <ModalFooter>
            <EventActions>
              <EventButton onClick={handleEdit}>Edit</EventButton>
              <EventButton onClick={handleDelete}>Delete</EventButton>
            </EventActions>
          </ModalFooter>
        </Modal>
      </ModalOverlay>
      {showEditModal && <EditEventModal event={event} onClose={() => setShowEditModal(false)} />}
      {showDeleteModal && <DeleteEventModal eventId={event.id} onClose={() => setShowDeleteModal(false)} />}
    </>
  );
};

export default EventInfoModal;
