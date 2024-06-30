import React from 'react';
import { ModalOverlay, Modal, ModalHeader, ModalTitle, CloseButton, ModalBody, Text, ModalFooter, CancelButton, DeleteButton } from './DeleteCalendarModal.style';

const DeleteCalendarModal = ({ calendar, onDelete, onClose }) => {
  return (
    <ModalOverlay>
      <Modal>
        <ModalHeader>
          <ModalTitle>Delete calendar</ModalTitle>
          <CloseButton onClick={onClose}>X</CloseButton>
        </ModalHeader>
        <ModalBody>
          <Text>Are you sure you want to delete {calendar.title}? You'll no longer have access to this calendar and its events.</Text>
        </ModalBody>
        <ModalFooter>
          <CancelButton onClick={onClose}>Cancel</CancelButton>
          <DeleteButton onClick={onDelete}>Delete</DeleteButton>
        </ModalFooter>
      </Modal>
    </ModalOverlay>
  );
};

export default DeleteCalendarModal;

