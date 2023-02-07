import { mdiBook, mdiClose, mdiCloudSync, mdiPlus } from "@mdi/js";
import { Icon } from "@mdi/react";
import { rgba } from "polished";
import React, { useState } from "react";
import styled, { useTheme } from "styled-components";
import { FontStyle, FontWeight, Heading, Span } from "styled-typography";
import Button from "../Button";
import Modal, { ModalContent, ModalHeader } from "../Modal";
import SearchInput from "../SearchInput";

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
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  width: 175px;
  height: 112px;
  order: 0;
  flex-grow: 0;
  padding: ${(props) => props.theme.spacing.lg};
  border-radius: 0.5rem;
  box-shadow: 0 0.1rem 0.5rem rgba(0, 0, 0, 0.1);
  background-color: ${(props) => props.theme.card.background};
  transition: all 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    background: ${rgba("black", 0.4)};
  }
`;

const StyledCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const StyledHeading = styled(Heading)`
  margin-bottom: 12px;
`;

const templates = [
  {
    id: `name-1-${Math.random()}`,
    name: "Journal Article",
    type: "Journal Article",
    description:
      "A scholarly article written by one or more authors, usually published in a peer-reviewed journal.",
  },
  {
    id: `name-2-${Math.random()}`,
    name: "Book",
    type: "Book",
    description:
      "A collection of written works or compositions that have been published as a collection or in separate volumes.",
  },
  {
    id: `name-3-${Math.random()}`,
    name: "Website",
    type: "Website",
    description:
      "A set of related web pages served from a single web domain and accessible via the Internet.",
  },
  {
    id: `name-4-${Math.random()}`,
    name: "Thesis",
    type: "Thesis",
    description:
      "A long written essay or dissertation on a particular subject, especially one submitted for a university degree.",
  },
  {
    id: `name-5-${Math.random()}`,
    name: "Conference Paper",
    type: "Conference Paper",
    description:
      "A paper presented at a conference, symposium, or similar event.",
  },
];

const templateCards = templates.map((template) => (
  <CardContainer key={template.id}>
    <Icon path={mdiBook} size={1} />
    <Span
      level={5}
      fontWeight={FontWeight.Regular}
      fontStyle={FontStyle.Normal}
    >
      {template.name}
    </Span>
  </CardContainer>
));

const createNewModal = ({ isModalOpen, setIsModalOpen, theme }) => {
  return isModalOpen ? (
    <Modal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      closeIcon={mdiClose}
    >
      <ModalHeader>
        <StyledHeading color={theme.colors[theme.mode].text}>
          Search by metadata of
        </StyledHeading>
        <div>
          <SearchInput
            placeholder="ISBNs, DOIs, PMIDs, arXiv IDs, ADS Bibcodes"
            variant="borderStyle"
          />
        </div>
      </ModalHeader>
      <ModalContent>
        <StyledHeading color={theme.colors[theme.mode].text}>
          Or add new from a template
        </StyledHeading>
        <StyledCardWrapper>{templateCards}</StyledCardWrapper>
      </ModalContent>
    </Modal>
  ) : null;
};

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
        {createNewModal({ isModalOpen, setIsModalOpen, theme })}
      </StyledRightCol>
    </StyledHeader>
  );
}
