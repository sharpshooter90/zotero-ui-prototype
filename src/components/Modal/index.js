import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { Icon } from "@mdi/react";

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
  z-index: ${(props) => props.theme.zIndex.modal};
`;

const StyledModalContainer = styled.div``;

const CloseButton = styled(Icon)`
  background-color: transparent;
  border: 0;
  color: white;
  cursor: pointer;
  position: absolute;
  top: 0px;
  right: 0px;
`;

const StyledModalHeader = styled.div`
  background: #111111;
  padding: 24px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;

const StyledModalFooter = styled.div`
  padding: 24px;
  display: flex;
`;

const StyledModalWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: ${(props) => props.theme.zIndex.modal};
`;

const StyledModalContent = styled.div`
  padding: 0px 24px;
`;

const StyledModalBody = styled.div`
  max-height: 80%;
  max-width: 800px;
  width: 800px;
  background: #151515;
  border-radius: 12px;
  color: #fff;
  position: relative;
  z-index: ${(props) => props.theme.zIndex.modal};
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

const Modal = ({ isOpen, children, onClose, closeIcon }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return isOpen
    ? ReactDOM.createPortal(
        <StyledModalWrapper ref={modalRef}>
          <ModalOverlay />
          <StyledModalBody>
            <StyledModalContainer>{children}</StyledModalContainer>
            <CloseButton onClick={onClose} path={closeIcon} size={1}>
              Close
            </CloseButton>
          </StyledModalBody>
        </StyledModalWrapper>,
        document.body
      )
    : null;
};

export { ModalHeader, ModalFooter, ModalContent };
export default Modal;
