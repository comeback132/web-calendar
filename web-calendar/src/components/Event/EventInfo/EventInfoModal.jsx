import React, { useState } from "react";
import { useSelector } from "react-redux";
import EditEventModal from "@/components/Event/EditEvent/EditEventModal";
import CustomButton from "@/components/CustomButton/CustomButton";
import DeleteEventModal from "@/components/Event/DeleteEvent/DeleteEventModal";
import Icon from "@/components/Icon/Icon";
import titleIcon from "@/assets/titleIcon.png";
import clock from "@/assets/clock.png";
import calendarIcon from "@/assets/calendarIcon.png";
import description from "@/assets/pdescription.png";
import { ElementWrap } from "@/components/Event/CreateEvent/CreateEventModal.style";
import CalendarCheckbox from "@/components/Event/CalendarCheckbox/CalendarCheckbox";
import {
  ModalOverlay,
  Modal,
  ModalTitle,
  CloseButton,
  ModalBody,
  ModalFooter,
  EventDetail,
  EventActions,
  EventButton
} from "./EventInfoModal.style";
import { ModalHeader } from "@/components/Event/CreateEvent/CreateEventModal.style";

const EventInfoModal = ({ event, onClose, calendarId }) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const calendars = useSelector((state) => state.calendar.calendars);
  const calendar = calendars.find((cal) => cal.id === calendarId);

  const handleDelete = () => {
    setShowDeleteModal(true);
  };

  const handleEdit = () => {
    setShowEditModal(true);
  };

  const handleEditModalClose = () => {
    setShowEditModal(false);
    onClose();  // Close EventInfoModal after EditEventModal closes
  };

  const handleDeleteModalClose = () => {
    setShowDeleteModal(false);
    onClose();  // Close EventInfoModal after DeleteEventModal closes
  };

  return (
    <>
      <ModalOverlay>
        <Modal>
          <ModalHeader>
            <ModalTitle>Event Information</ModalTitle>
            <EventActions>
              <CustomButton
                style={{ backgroundColor: "transparent", width: "auto" }}
                icon="edit"
                $iconOnly={true}
                onClick={handleEdit}
              />
              <CustomButton
                style={{ backgroundColor: "transparent", width: "auto" }}
                icon="delete"
                $iconOnly={true}
                onClick={handleDelete}
              />
              <CustomButton
                icon="close"
                $iconOnly
                onClick={onClose}
                style={{ background: "transparent", width: "auto"}}
              />
            </EventActions>
          </ModalHeader>
          <ModalBody>
            <ElementWrap><Icon src={titleIcon} style={{ position:'relative',bottom: "5px" }} /> {event.title}</ElementWrap>
            <ElementWrap><Icon src={clock} style={{ position:'relative',bottom: "5px" }} /> {new Date(event.date).toDateString()} {event.allDay} {event.repeatOption}</ElementWrap>
            <ElementWrap><Icon src={calendarIcon} style={{ position:'relative',bottom: "5px" }} /> <CalendarCheckbox color={calendar.color} />
            <span>{calendar.name}</span></ElementWrap>
            <ElementWrap><Icon src={description} style={{ position:'relative',bottom: "5px" }} /> {event.description}</ElementWrap>
          </ModalBody>
        </Modal>
      </ModalOverlay>
      {showEditModal && <EditEventModal event={event} onClose={handleEditModalClose} />}
      {showDeleteModal && <DeleteEventModal calendarId={calendarId} eventId={event.id} onClose={handleDeleteModalClose} />}
    </>
  );
};

export default EventInfoModal;
