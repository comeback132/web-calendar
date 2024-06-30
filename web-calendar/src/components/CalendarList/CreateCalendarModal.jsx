// src/components/CalendarList/CreateCalendarModal.jsx
import React, { useState } from "react";
import {ModalOverlay, Modal, ModalHeader, ModalTitle, CloseButton, ModalBody, Label, Input, ModalFooter, SaveButton, ElementWrap} from "./CreateCalendarModal.style";
import ColourPicker from "../ColourPicker/ColourPicker";
import CustomInput from "../CustomInput/CustomInput";
import Icon from "../Icon/Icon";
import titleIcon from "@/assets/titleIcon.png";
import colorPicker from "@/assets/colorPickerIcon.png";

const CreateCalendarModal = ({ onCreate, onClose }) => {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("#16AF6E");

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
          <ElementWrap>
            <Icon src={titleIcon} />
            <CustomInput
              label="Title"
              type="text"
              placeholder="Enter title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={{ marginBottom: "10px" }}
            />
          </ElementWrap>
          <ElementWrap>
            <Icon src={colorPicker} />
            <ColourPicker title="Colour" value={color} onChange={setColor} />
          </ElementWrap>
        </ModalBody>
        <ModalFooter>
          <SaveButton onClick={handleSave}>Save</SaveButton>
        </ModalFooter>
      </Modal>
    </ModalOverlay>
  );
};

export default CreateCalendarModal;
