import styled from 'styled-components';

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

const Text = styled.p`
  font-size: 14px;
  color: #333;
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CancelButton = styled.button`
  background: #ccc;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  margin-right: 10px;
  cursor: pointer;
`;

const DeleteButton = styled.button`
  background-color: #d9534f;
  border: none;
  border-radius: 4px;
  color: white;
  padding: 8px 16px;
  cursor: pointer;
`;

export { ModalOverlay, Modal, ModalHeader, ModalTitle, CloseButton, ModalBody, Text, ModalFooter, CancelButton, DeleteButton };