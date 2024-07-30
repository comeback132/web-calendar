import React, { useState } from "react";
import {
  ModalOverlay,
  Modal,
  ModalHeader,
  ModalTitle,
  ModalBody,
  ModalFooter,
  ElementWrap,
  SaveButton,
} from "./CreateCalendarModal.style";
import { ErrorMessage } from "../CustomInput/style";
import ColourPicker from "../ColourPicker/ColourPicker";
import CustomInput from "../CustomInput/CustomInput";
import Icon from "../Icon/Icon";
import CustomButton from "../CustomButton/CustomButton";
import titleIcon from "@/assets/titleIcon.png";
import colorPicker from "@/assets/colorPickerIcon.png";

const CreateCalendarModal = ({ onCreate, onClose }) => {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("#16AF6E");
  const [error, setError] = useState(false);

  const handleSave = () => {
    if (title.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
    onCreate(title, color);
  };

  return (
    <ModalOverlay>
      <Modal>
        <ModalHeader>
          <ModalTitle>Create calendar</ModalTitle>
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
              error={error}
            />
            {error && <ErrorMessage></ErrorMessage>}
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
