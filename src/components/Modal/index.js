import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import styled, { useTheme } from "styled-components";
import { rgba, darken, lighten } from "polished";
import IconButton from "../IconButton";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${(props) =>
    rgba(props.theme.modal.overlayBackground, 0.75)};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${(props) => props.theme.zIndex.modal};
`;

const StyledModalContainer = styled.div``;

const CloseButton = styled.div`
  background-color: transparent;
  border: 0;
  color: ${(props) => props.theme.text};
  cursor: pointer;
  position: absolute;
  top: 8px;
  right: 8px;
`;

const StyledModalHeader = styled.div`
  background: ${(props) => lighten(0.1, props.theme.modal.backgroundColor)};
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
  overflow: scroll;
  height: 400px;
  padding: ${(props) => props.theme.spacing.md};
`;

const StyledModalBody = styled.div`
  max-height: 80%;
  max-width: 800px;
  width: 800px;
  background: ${(props) => props.theme.modal.backgroundColor};
  border-radius: 12px;
  color: ${(props) => props.theme.text};
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
  const theme = useTheme();

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
            <CloseButton>
              <IconButton
                onClick={onClose}
                iconPath={closeIcon}
                size={1}
                iconColor={theme.colors.iconColor}
              ></IconButton>
            </CloseButton>
          </StyledModalBody>
        </StyledModalWrapper>,
        document.body
      )
    : null;
};

export { ModalHeader, ModalFooter, ModalContent };
export default Modal;
