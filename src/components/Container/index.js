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
import { StyledMutedText } from "../StyledUtils.js";
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

const StyledTags = styled.div`
  margin-top: 12px;
  display: flex;
  gap: 8px;
`;
const StyledTabContent = styled.div`
  padding: 0 18px;
`;
const StyledScollableArea = styled.div`
  height: 100vh;
  overflow-y: scroll;
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
  myLibrary: [
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
const isListIndexActive = (activeUrl, currentUrl) => {
  return currentUrl === activeUrl ? true : false;
};

const camelCaseToString = (camelCase) => {
  const string = camelCase.replace(/([A-Z])/g, " $1");
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const renderTreeView = (
  sidebarNavItems,
  openItems,
  theme,
  listItemOnClick,
  currentUrl,
  activeListIndex
) => {
  {
    return Object.keys(sidebarNavItems).map((key, index) => (
      <React.Fragment key={index + "_category"}>
        <ListSubheader
          onHoverActions={mapIconsToActions(myLibraryOnHoverActionIcons)}
        >
          {camelCaseToString(key)}
        </ListSubheader>
        {sidebarNavItems[key].map((item, ItemIndex) => {
          const isOpen = !!openItems[item.id] || activeListIndex === item.url;
          return (
            <React.Fragment key={ItemIndex + "_menuItem"}>
              <ListItem
                leftIcon={
                  isOpen
                    ? sidebarTypeIcons[item.type]
                    : sidebarTypeIcons[item.type]
                }
                leftIconColor={theme.colors.collectionTypeColors[item.type]}
                onHoverActions={mapIconsToActions(
                  ListMyLibraryOnHoverActionIcons
                )}
                onClick={() => listItemOnClick(item)}
                iconSize={0.8}
                key={item.id}
                itemId={item.id}
              >
                {item.name}
              </ListItem>
              {item.subcollections.length > 0 ? (
                <Collapse
                  key={item.subcollections.id + "wrapper"}
                  as="li"
                  isOpen={isOpen}
                >
                  {item.subcollections.map((subitem, subItemIndex) => (
                    <StyledLink
                      to={subitem.url}
                      key={subItemIndex + "_subMenuItem"}
                    >
                      <ListItem
                        key={subitem.id}
                        leftIcon={collectionTypeIcons[subitem.type]}
                        onHoverActions={mapIconsToActions(
                          ListMyLibraryOnHoverActionIcons
                        )}
                        iconSize={0.8}
                        sx={{ paddingLeft: "32px" }}
                        itemId={subitem.id}
                        isActive={isListIndexActive(subitem.url, currentUrl)}
                        as="div"
                      >
                        {subitem.name}
                      </ListItem>
                    </StyledLink>
                  ))}
                </Collapse>
              ) : (
                <Collapse
                  isOpen={isOpen}
                  key={item.subcollections.id + "_noSubItems"}
                  as="li"
                >
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
        })}
      </React.Fragment>
    ));
  }
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

const clearCurrentURL = (pathname) => {
  const parentURL = pathname.split("/"); // split the path into an array of parts
  return "/" + parentURL[1]; // return the path
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

  const currentUrl = location.pathname;

  const { isLeftSidebarOpen, isRightSidebarOpen, rightSidebarContent } =
    useSidebar();

  const [activeListIndex, setActiveListIndex] = useState(
    clearCurrentURL(currentUrl)
  );

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
              isActive={currentUrl === "/home" ? true : false}
            >
              Home
            </ListItem>
          </StyledLink>
        </List>
        <StyledScollableArea>
          {renderTreeView(
            sidebarNavItems,
            openItems,
            theme,
            listItemOnClick,
            currentUrl,
            activeListIndex
          )}
        </StyledScollableArea>
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
        {rightSidebarContent && rightSidebarContent}
      </Sidebar>

      {searchModal({ isModalOpen, setIsModalOpen, theme })}
    </StyledContainer>
  );
}
