import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
`;

export const Modal = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ModalTitle = styled.h3`
  margin: 0;
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

export const ModalBody = styled.div`
  margin-top: 20px;
`;

export const ModalFooter = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
`;

export const EventDetail = styled.p`
  margin: 10px 0;
`;

export const EventActions = styled.div`
  display: flex;
  gap: 10px;
`;

export const EventButton = styled.button`
  background: #007bff;
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #0056b3;
  }
`;
