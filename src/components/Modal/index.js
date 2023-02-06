import React, { useState } from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

const StyledModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 10px;

  position: relative;

  overflow-y: scroll;

  background: #151515;
  border-radius: 12px;
  max-height: 80%;
  max-width: 800px;
  width: 800px;
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

const StyledModalHeader = styled.div`
  background: #111111;
  padding: 24px;
  width: 100%;
`;

const StyledModalFooter = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
`;

const StyledModalContent = styled.div`
  padding: 0px 24px;
`;

const ModalHeader = ({ children }) => (
  <StyledModalHeader>{children}</StyledModalHeader>
);

const ModalFooter = ({ children }) => (
  <StyledModalFooter>{children}</StyledModalFooter>
);

const ModalContent = ({ children }) => (
  <StyledModalContent>{children}</StyledModalContent>
);

const Modal = ({ isOpen, children, onClose }) => {
  return isOpen ? (
    <ModalOverlay>
      <StyledModalContainer>
        <CloseButton onClick={onClose}>Close</CloseButton>
        {children}
      </StyledModalContainer>
    </ModalOverlay>
  ) : null;
};

export { ModalHeader, ModalFooter, ModalContent };
export default Modal;
