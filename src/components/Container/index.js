import {
  mdiBook,
  mdiClose,
  mdiDotsVertical,
  mdiFile,
  mdiFileDocument,
  mdiFilePlusOutline,
  mdiFolder,
  mdiFolderAccount,
  mdiFolderPlusOutline,
  mdiHome,
  mdiMagnify,
  mdiPlus,
  mdiRssBox,
} from "@mdi/js";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Tooltip } from "react-tippy";

import { rgba } from "polished";
import styled, { useTheme } from "styled-components";

import { useSidebar } from "../../context.config";
import RouterConfig from "../../routes";
import Collapse from "../Collapse";
import IconButton from "../IconButton";
import { List, ListItem } from "../List";
import ListSubheader from "../List/ListSubheader";
import Main from "../Main";
import Modal, { ModalContent, ModalHeader } from "../Modal";
import SearchInput from "../SearchInput";
import Sidebar from "../Sidebar";
import Tag from "../Tag";

const StyledContainer = styled.div`
  display: flex;
  height: calc(100vh - 67px);
  background: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
`;
const StyledLink = styled(Link)`
  color: ${(props) => props.theme.colors[props.theme.mode].text};
  text-decoration: none;
`;
const StyledMutedText = styled.div`
  color: ${(props) => rgba(props.theme.colors[props.theme.mode].text, 0.5)};
`;

const StyledTags = styled.div`
  margin-top: 12px;
  display: flex;
  gap: 8px;
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
  document: mdiFileDocument,
};
const sidebarTypeIcons = {
  collections: mdiFolder,
  groupCollections: mdiFolderAccount,
  feeds: mdiRssBox,
};
const sidebarNavItems = {
  collections: [
    {
      id: "BookReviews-1",
      name: "Book Reviews",
      url: "/book-reviews",
      type: "collections",
      subcollections: [
        {
          id: "BookReviews-DiscussingDesign-2",
          name: "Discussing Design",
          type: "document",
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
      type: "collections",
      subcollections: [],
    },
    {
      id: "Dissertation-5",
      name: "Dissertation",
      url: "/dissertation",
      type: "collections",
      subcollections: [],
    },
  ],
  groupCollections: [
    {
      id: "designGroup-1",
      name: "Design Group",
      url: "/design-group",
      type: "groupCollections",
      subcollections: [],
    },
    {
      id: "research-group-1",
      name: "Research Group",
      url: "/research-group",
      type: "groupCollections",
      subcollections: [],
    },
  ],
  feeds: [
    {
      id: "feed-1",
      name: "Tech Feed",
      url: "/tech-feed",
      type: "feeds",
      subcollections: [],
    },
    {
      id: "aquatic-feed-1",
      name: "Aquatic Feed",
      url: "/aquatic-feed",
      type: "feeds",
      subcollections: [],
    },
  ],
};
const tagsData = [
  {
    name: "Filter by tags",
    leftIcon: mdiPlus,
    rightIcon: mdiClose,
    onClick: () => console.log("Clicked Tag 1"),
  },
  {
    name: "Only search title",
    leftIcon: mdiPlus,
    rightIcon: mdiClose,
    onClick: () => console.log("Clicked Tag 2"),
  },
  {
    name: "Creator",
    leftIcon: mdiPlus,
    rightIcon: mdiClose,
    onClick: () => console.log("Clicked Tag 3"),
  },
  {
    name: "year",
    leftIcon: mdiPlus,
    rightIcon: mdiClose,
    onClick: () => console.log("Clicked Tag 3"),
  },
];

const searchModal = ({ isModalOpen, setIsModalOpen, theme }) => {
  return isModalOpen ? (
    <Modal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      closeIcon={mdiClose}
    >
      <ModalHeader>
        <SearchInput
          placeholder="Search"
          variant="borderStyle"
          autoFocus={true}
        />
        <StyledTags>
          {tagsData.map((tag, index) => (
            <Tag
              key={tag.name + index}
              title={tag.name}
              leftIcon={tag.leftIcon}
              rightIcon={tag.rightIcon}
              onClick={tag.onClick}
              size="small"
            />
          ))}
        </StyledTags>
      </ModalHeader>
      <ModalContent>test</ModalContent>
    </Modal>
  ) : null;
};

const mapCollections = (
  collections,
  openItems,
  listItemOnClick,
  theme,
  href
) => {
  return Object.values(collections).map((collection, index) => {
    const isOpen = !!openItems[collection.id];
    return (
      <React.Fragment key={index}>
        <ListItem
          leftIcon={
            isOpen
              ? sidebarTypeIcons[collection.type]
              : sidebarTypeIcons[collection.type]
          }
          leftIconColor={theme.colors.collectionTypeColors[collection.type]}
          onHoverActions={mapIconsToActions(ListMyLibraryOnHoverActionIcons)}
          onClick={() => listItemOnClick(collection)}
          iconSize={0.8}
          key={collection.id}
          itemId={collection.id}
        >
          {collection.name}
        </ListItem>
        {collection.subcollections.length > 0 ? (
          collection.subcollections.map((subCollection) => {
            return (
              <Collapse
                isOpen={isOpen}
                key={subCollection.id + "wrapper"}
                as="li"
              >
                <StyledLink to={subCollection.url}>
                  <ListItem
                    key={subCollection.id}
                    leftIcon={collectionTypeIcons[subCollection.type]}
                    onHoverActions={mapIconsToActions(
                      ListMyLibraryOnHoverActionIcons
                    )}
                    iconSize={0.8}
                    sx={{ paddingLeft: "32px" }}
                    itemId={subCollection.id}
                    isActive={href === subCollection.url ? true : false}
                    as="div"
                  >
                    {subCollection.name}
                  </ListItem>
                </StyledLink>
              </Collapse>
            );
          })
        ) : (
          <Collapse isOpen={isOpen} key={collection.id + "_noSubItems"} as="li">
            <ListItem
              onHoverActions={mapIconsToActions(
                ListMyLibraryOnHoverActionIcons
              )}
              iconSize={0.8}
              sx={{ paddingLeft: "32px" }}
              as="div"
            >
              <StyledMutedText>Empty</StyledMutedText>
            </ListItem>
          </Collapse>
        )}
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
  const listItemOnClick = (collection) => {
    setOpenItems({
      ...openItems,
      [collection.id]: !openItems[collection.id],
    });
  };
  const location = useLocation();

  const href = location.pathname;

  const { isLeftSidebarOpen, isRightSidebarOpen } = useSidebar();

  return (
    <StyledContainer>
      <Sidebar
        width={"280px"}
        dragHandlePosition="right"
        isOpen={isLeftSidebarOpen}
      >
        <List>
          <ListItem>
            <SearchInput
              placeholder="search"
              onClick={() => setIsModalOpen(true)}
            />
          </ListItem>

          <StyledLink to="/home">
            <ListItem
              leftIcon={mdiHome}
              iconSize={0.8}
              isActive={href === "/home" ? true : false}
            >
              Home
            </ListItem>
          </StyledLink>
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
            listItemOnClick,
            theme,
            href
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
            listItemOnClick,
            theme
          )}
        </List>
        <List>
          <ListSubheader
            onHoverActions={mapIconsToActions(myLibraryOnHoverActionIcons)}
          >
            Feeds
          </ListSubheader>
          {mapCollections(
            sidebarNavItems.feeds,
            openItems,
            listItemOnClick,
            theme
          )}
        </List>
      </Sidebar>

      <Main>
        <RouterConfig />
      </Main>

      <Sidebar
        isOpen={isRightSidebarOpen}
        width={"280px"}
        dragHandlePosition="left"
        position="right"
      >
        right sidebar
      </Sidebar>

      {searchModal({ isModalOpen, setIsModalOpen, theme })}
    </StyledContainer>
  );
}
