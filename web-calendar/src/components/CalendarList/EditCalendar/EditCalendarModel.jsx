import React, { useState, useEffect } from "react";
import {
  ModalOverlay,
  Modal,
  ModalHeader,
  ModalTitle,
  ModalBody,
  ModalFooter,
  SaveButton,
  ElementWrap,
} from "@/components/CalendarList/CreateCalendar/CreateCalendarModal.style";
import ColourPicker from "@/components/ColourPicker/ColourPicker";
import CustomInput from "@/components/CustomInput/CustomInput";
import CustomButton from "@/components/CustomButton/CustomButton";
import { ErrorMessage } from "@/components//CustomInput/style";
import Icon from "@/components/Icon/Icon";
import titleIcon from "@/assets/titleIcon.png";
import colorPicker from "@/assets/colorPickerIcon.png";

const EditCalendarModal = ({ calendar, onEdit, onClose }) => {
  const [title, setTitle] = useState(calendar.name);
  const [color, setColor] = useState(calendar.color);
  const [error, setError] = useState({
    title: false,
    color: false,
  });

  useEffect(() => {
    setTitle(calendar.name);
    setColor(calendar.color);
  }, [calendar]);

  const handleSave = () => {
    let hasError = false;

    if (title.trim() === "") {
      setError(prev => ({ ...prev, title: true }));
      hasError = true;
    } else {
      setError(prev => ({ ...prev, title: false }));
    }

    if (!color) { 
      setError(prev => ({ ...prev, color: true }));
      hasError = true;
    } else {
      setError(prev => ({ ...prev, color: false }));
    }

    if (hasError) return;

    onEdit(calendar.id, title, color);
  };

  return (
    <ModalOverlay>
      <Modal>
        <ModalHeader>
          <ModalTitle>Edit calendar</ModalTitle>
          <CustomButton icon="close" iconOnly onClick={onClose} />
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
              error={error.title}
            />
            {error.title && <ErrorMessage/>}
          </ElementWrap>
          <ElementWrap>
            <Icon src={colorPicker} />
            <ColourPicker title="Colour" value={color} onChange={setColor} />
            {error.color && <ErrorMessage/>}
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

