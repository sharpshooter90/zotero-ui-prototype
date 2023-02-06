import React, { useState } from "react";
import styled, { useTheme } from "styled-components";
import Button from "../Button";
import { mdiPlus, mdiCloudSync, mdiClose } from "@mdi/js";
import Modal, { ModalContent, ModalHeader, ModalFooter } from "../Modal";
import SearchInput from "../SearchInput";
import { Span, Heading, FontWeight, FontStyle } from "styled-typography";
import IconButton from "../IconButton";

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
  const theme = useTheme();
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
          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            closeIcon={mdiClose}
          >
            <ModalHeader>
              <Span
                level={4}
                fontWeight={FontWeight.Medium}
                fontStyle={FontStyle.Normal}
                color="#fff"
                lineHeight={1.3}
              >
                Hello, World!
              </Span>
              <div>
                <SearchInput placeholder="ISBNs, DOIs, PMIDs, arXiv IDs, ADS Bibcodes" />
              </div>
            </ModalHeader>
            <ModalContent>Content</ModalContent>
            <ModalFooter>Footer</ModalFooter>
          </Modal>
        )}
      </StyledRightCol>
    </StyledHeader>
  );
}
