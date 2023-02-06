import React, { useState } from "react";
import styled from "styled-components";
import Button from "../Button";
import { mdiPlus, mdiCloudSync } from "@mdi/js";
import Modal, { ModalContent, ModalHeader, ModalFooter } from "../Modal";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  gap: 10px;
  height: 46px;

  background-color: ${(props) => props.theme.headerBackgroundColor};
  color: ${(props) => props.theme.headerTextColor};
  border-bottom: 1px solid #343434;
`;

const StyledLeftCol = styled.div`
  display: flex;
  align-items: center;
`;

const StyledRightCol = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <StyledHeader>
      <StyledLeftCol></StyledLeftCol>
      <StyledRightCol>
        <Button
          variant="secondary"
          size="xs"
          leftIcon={mdiCloudSync}
          iconSize={0.8}
        >
          Sync
        </Button>
        <Button
          variant="primary"
          size="xs"
          leftIcon={mdiPlus}
          iconSize={0.8}
          onClick={() => setIsModalOpen(true)}
        >
          Add New
        </Button>
        {isModalOpen && (
          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <ModalHeader>This is the modal content</ModalHeader>
            <ModalContent>Content</ModalContent>
            <ModalFooter>Footer</ModalFooter>
          </Modal>
        )}
      </StyledRightCol>
    </StyledHeader>
  );
}
