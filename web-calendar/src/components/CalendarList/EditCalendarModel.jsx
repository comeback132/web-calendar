import React, { useState, useEffect } from "react";
import { ModalOverlay, Modal, ModalHeader, ModalTitle, CloseButton, ModalBody, Label, Input, ModalFooter, SaveButton, ElementWrap } from "./CreateCalendarModal.style";
import ColourPicker from "../ColourPicker/ColourPicker";
import CustomInput from "../CustomInput/CustomInput";
import Icon from "../Icon/Icon";
import titleIcon from "@/assets/titleIcon.png";
import colorPicker from "@/assets/colorPickerIcon.png";

const EditCalendarModal = ({ calendar, onEdit, onClose }) => {
  const [title, setTitle] = useState(calendar.name);
  const [color, setColor] = useState(calendar.color);

  useEffect(() => {
    setTitle(calendar.name);
    setColor(calendar.color);
  }, [calendar]);

  const handleSave = () => {
    console.log("Saving", calendar.id, title, color);
    onEdit(calendar.id, title, color);
    console.log(calendar);
  };

  return (
    <ModalOverlay>
      <Modal>
        <ModalHeader>
          <ModalTitle>Edit calendar</ModalTitle>
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

export default EditCalendarModal;
