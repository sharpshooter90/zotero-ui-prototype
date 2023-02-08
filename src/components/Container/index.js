import {
  mdiBook,
  mdiClose,
  mdiDotsVertical,
  mdiFile,
  mdiFilePlusOutline,
  mdiFolder,
  mdiFolderOpen,
  mdiFolderPlusOutline,
  mdiHome,
  mdiMagnify,
  mdiPlus,
} from "@mdi/js";
import React, { useState } from "react";
import { Tooltip } from "react-tippy";
import styled, { useTheme } from "styled-components";
import Collapse from "../Collapse";
import IconButton from "../IconButton";
import { List, ListItem } from "../List";
import ListSubheader from "../List/ListSubheader";
import Main from "../Main";
import Modal, { ModalContent, ModalHeader } from "../Modal";
import SearchInput from "../SearchInput";
import Sidebar from "../Sidebar";

const StyledContainer = styled.div`
  display: flex;
  height: calc(100vh - 67px);
  background: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
`;

const ListMyLibraryOnHoverActionIcons = {
  // search: mdiMagnify,
  // edit: mdiPencilOutline,
  // delete: mdiDeleteOutline,
  newFolder: mdiFolderPlusOutline,
  newFile: mdiFilePlusOutline,
  more: mdiDotsVertical,
};

const myLibraryOnHoverActionIcons = {
  search: mdiMagnify,
  createNew: mdiPlus,
};

const collectionTypeIcons = {
  collection: mdiFolder,
  note: mdiFile,
  book: mdiBook,
};
const sidebarNavItems = {
  collections: [
    {
      id: "BookReviews-1",
      name: "Book Reviews",
      url: "/book-reviews",
      subcollections: [
        {
          id: "BookReviews-DiscussingDesign-2",
          name: "Discussing Design",
          type: "book",
          url: "/book-reviews/discussing-design",
        },
        {
          id: "BookReviews-NotesForThisBook-3",
          name: "Notes for this book",
          type: "note",
          url: "/book-reviews/notes-for-this-book",
        },
      ],
    },
    {
      id: "ColonialMedicine-4",
      name: "Colonial Medicine",
      url: "/colonial-medicine",
      subcollections: [],
    },
    {
      id: "Dissertation-5",
      name: "Dissertation",
      url: "/dissertation",
      subcollections: [],
    },
  ],
  groupCollections: [
    {
      id: "designGroup-1",
      name: "Design Group",
      url: "/design-group",
      subcollections: [],
    },
    {
      id: "research-group-1",
      name: "Research Group",
      url: "/research-group",
      subcollections: [],
    },
  ],
  feeds: [
    {
      id: "feed-1",
      name: "Tech Feed",
      url: "/tech-feed",
      subcollections: [],
    },
    {
      id: "aquatic-feed-1",
      name: "Aquatic Feed",
      url: "/aquatic-feed",
      subcollections: [],
    },
  ],
};

const searchModal = ({ isModalOpen, setIsModalOpen, theme }) => {
  return isModalOpen ? (
    <Modal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      closeIcon={mdiClose}
    >
      <ModalHeader>test</ModalHeader>
      <ModalContent>test</ModalContent>
    </Modal>
  ) : null;
};

const mapCollections = (collections, openItems, handleClick, theme) => {
  return Object.values(collections).map((collecton, index) => {
    const isOpen = !!openItems[collecton.id];
    return (
      <React.Fragment key={index}>
        <ListItem
          leftIcon={isOpen ? mdiFolderOpen : mdiFolder}
          leftIconColor={theme.colors.iconFolderColor}
          onHoverActions={mapIconsToActions(ListMyLibraryOnHoverActionIcons)}
          onClick={() => handleClick(collecton.id)}
          iconSize={0.8}
          key={collecton.id}
          itemId={collecton.id}
        >
          {collecton.name}
        </ListItem>
        {collecton.subcollections.map((subCollection) => {
          return (
            <Collapse isOpen={isOpen} key={subCollection.id + "wrapper"}>
              <ListItem
                key={subCollection.id}
                leftIcon={collectionTypeIcons[subCollection.type]}
                onHoverActions={mapIconsToActions(
                  ListMyLibraryOnHoverActionIcons
                )}
                iconSize={0.8}
                sx={{ paddingLeft: "32px" }}
                itemId={subCollection.id}
              >
                {subCollection.name}
              </ListItem>
            </Collapse>
          );
        })}
      </React.Fragment>
    );
  });
};

const mapIconsToActions = (icons) => {
  return Object.entries(icons).map(([key, value, index]) => {
    return (
      <Tooltip
        title={key.replace(/([a-z0-9])([A-Z])/g, "$1 $2")}
        position="top"
        style={{ textTransform: "lowercase" }}
        delay={600}
        size="small"
        key={index}
      >
        <IconButton
          iconPath={value}
          key={index}
          size={0.7}
          onClick={() => console.log("action: " + key)}
        />
      </Tooltip>
    );
  });
};

export default function Container() {
  const theme = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openItems, setOpenItems] = useState({});
  const handleClick = (id) => {
    setOpenItems({
      ...openItems,
      [id]: !openItems[id],
    });
  };

  return (
    <StyledContainer>
      <Sidebar width={"280px"} dragHandlePosition="right">
        <List>
          <ListItem>
            <SearchInput
              placeholder="search"
              onClick={() => setIsModalOpen(true)}
            />
          </ListItem>
          <ListItem leftIcon={mdiHome} iconSize={0.8}>
            Home
          </ListItem>
        </List>
        <List>
          <ListSubheader
            onHoverActions={mapIconsToActions(myLibraryOnHoverActionIcons)}
          >
            My Library
          </ListSubheader>
          {mapCollections(
            sidebarNavItems.collections,
            openItems,
            handleClick,
            theme
          )}
        </List>
        <List>
          <ListSubheader
            onHoverActions={mapIconsToActions(myLibraryOnHoverActionIcons)}
          >
            Group Collections
          </ListSubheader>
          {mapCollections(
            sidebarNavItems.groupCollections,
            openItems,
            handleClick,
            theme
          )}
        </List>
        <List>
          <ListSubheader
            onHoverActions={mapIconsToActions(myLibraryOnHoverActionIcons)}
          >
            Feeds
          </ListSubheader>
          {mapCollections(sidebarNavItems.feeds, openItems, handleClick, theme)}
        </List>
      </Sidebar>
      <Main />
      <Sidebar width={"280px"} dragHandlePosition="left">
        right sidebar
      </Sidebar>
      {searchModal({ isModalOpen, setIsModalOpen, theme })}
    </StyledContainer>
  );
}
