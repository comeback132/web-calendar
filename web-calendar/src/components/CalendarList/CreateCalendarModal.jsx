// src/components/CalendarList/CreateCalendarModal.jsx

import React, { useState } from 'react';
import styled from 'styled-components';
import ColourPicker from '../ColourPicker/ColourPicker';

const CreateCalendarModal = ({ onCreate, onClose }) => {
  const [title, setTitle] = useState('');
  const [color, setColor] = useState('#16AF6E');

  const handleSave = () => {
    onCreate(title, color);
  };

  return (
    <ModalOverlay>
      <Modal>
        <ModalHeader>
          <ModalTitle>Create calendar</ModalTitle>
          <CloseButton onClick={onClose}>X</CloseButton>
        </ModalHeader>
        <ModalBody>
          <Label>Title</Label>
          <Input type="text" value={title} onChange={e => setTitle(e.target.value)} />
          <Label>Colour</Label>
          <ColourPicker selectedColor={color} onColorSelect={setColor} />
        </ModalBody>
        <ModalFooter>
          <SaveButton onClick={handleSave}>Save</SaveButton>
        </ModalFooter>
      </Modal>
    </ModalOverlay>
  );
};

export default CreateCalendarModal;

// Styles for CreateCalendarModal
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
  z-index: 999;
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
