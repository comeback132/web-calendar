import styled from "styled-components";

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
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 522px;
  height: 446px;
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
const DatePickerWrapper = styled.div`
  position: absolute;
  z-index: 999;
`;

const DateTimeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #dedfe5;
  border-radius: 4px;
  margin-bottom: 10px;
`;

const TimeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Select = styled.ul`
  width: 100%;
  padding: 8px;
  border: 1px solid #dedfe5;
  border-radius: 4px;
  margin-bottom: 10px;
`;

const Textarea = styled.textarea`
  width: 100%;
  border: 1px solid #dedfe5;
  border-radius: 4px;
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: auto;
`;

const SaveButton = styled.button`
  background-color: #16af6e;
  border: none;
  border-radius: 4px;
  color: white;
  padding: 8px 16px;
  cursor: pointer;
`;
const ElementWrap = styled.div`
  display: flex;
  align-items: center;
  img {
    padding-right: 10px;
  }
`;
const RepeatWrap = styled.div`
  display: flex;
  align-items: center;
  margin-left:20px;
`;

export {
  ModalOverlay,
  Modal,
  ModalHeader,
  ModalTitle,
  CloseButton,
  ModalBody,
  Label,
  DatePickerWrapper,
  DateTimeWrapper,
  Input,
  TimeWrapper,
  CheckboxWrapper,
  Select,
  Textarea,
  ModalFooter,
  SaveButton,
  ElementWrap,
  RepeatWrap
};