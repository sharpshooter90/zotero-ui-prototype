import React, { useState } from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

const ModalContent = styled.div`
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  max-height: 80%;
  max-width: 600px;
  overflow-y: auto;
  padding: 20px;
  position: relative;
  color: #000;
`;

const CloseButton = styled.button`
  background-color: transparent;
  border: 0;
  color: red;
  cursor: pointer;
  position: absolute;
  top: 0px;
  right: 0px;
`;

const Modal = ({ isOpen, children, onClose }) => {
  return isOpen ? (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>Close</CloseButton>
        {children}
      </ModalContent>
    </ModalOverlay>
  ) : null;
};

export default Modal;
