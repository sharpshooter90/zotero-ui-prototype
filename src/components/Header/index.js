import {
  mdiBook,
  mdiBookOpen,
  mdiBookOpenPageVariant,
  mdiClose,
  mdiCloudSync,
  mdiFileDocument,
  mdiNewspaper,
  mdiNotebook,
  mdiPlus,
} from "@mdi/js";
import React, { useState } from "react";
import styled, { useTheme } from "styled-components";
import ActionCard from "../ActionCard";
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

const StyledCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const StyledHeading = styled.div`
  margin-bottom: 8px;
`;

const StyledSectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
`;
const templateIcons = {
  book: mdiBook,
  bookSection: mdiBookOpenPageVariant,
  document: mdiFileDocument,
  journalArticle: mdiNotebook,
  magazineArticle: mdiBookOpen,
  newspaperArticle: mdiNewspaper,
};

const templates = [
  {
    name: "Book",
    type: "book",
    description: "Add book",
    id: "book-1",
  },
  {
    name: "Book Section",
    type: "bookSection",
    description: "Add book section",
    id: "bookSection-1",
  },
  {
    name: "Document",
    type: "document",
    description: "Add document",
    id: "document-1",
  },
  {
    name: "Journal Article",
    type: "journalArticle",
    description: "Add Journal Article",
    id: "journalArticle-1",
  },
  {
    name: "Magazine Article",
    type: "magazineArticle",
    description: "Add M agazine Article",
    id: "magazineArticle-1",
  },
  {
    name: "Newspaper Article",
    type: "newspaperArticle",
    description: "Add Newspaper Article",
    id: "newspaperArticle-1",
  },
];

const templateCards = templates.map((template) => (
  <React.Fragment>
    {template.type && (
      <ActionCard
        key={template.id}
        iconPath={templateIcons[template.type]}
        title={template.name}
      />
    )}
  </React.Fragment>
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
          Search by metadata
        </StyledHeading>
        <div>
          <SearchInput
            placeholder="ISBNs, DOIs, PMIDs, arXiv IDs, ADS Bibcodes"
            variant="borderStyle"
            autoFocus={true}
          />
        </div>
      </ModalHeader>
      <ModalContent>
        <StyledSectionHeader>
          <StyledHeading color={theme.colors[theme.mode].text}>
            Add new from a template
          </StyledHeading>
          <SearchInput placeholder="Search in templates" variant="default" />
        </StyledSectionHeader>
        <StyledCardWrapper>{templateCards}</StyledCardWrapper>
        <br />
        <Button variant="secondary" style={{ flex: 1 }}>
          Show all (29 items)
        </Button>
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
