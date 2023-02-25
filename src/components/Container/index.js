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
  color: ${(props) => props.theme.colors.text};
  text-decoration: none;
`;

const StyledTags = styled.div`
  margin-top: 12px;
  display: flex;
  gap: 8px;
`;

const StyledScrollableArea = styled.div`
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
      subCollections: [
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
      subCollections: [],
    },
    {
      id: "Dissertation-5",
      name: "Dissertation",
      url: "/dissertation",
      type: "collections",
      subCollections: [],
    },
  ],
  groupCollections: [
    {
      id: "designGroup-1",
      name: "Design Group",
      url: "/design-group",
      type: "groupCollections",
      subCollections: [],
    },
    {
      id: "research-group-1",
      name: "Research Group",
      url: "/research-group",
      type: "groupCollections",
      subCollections: [],
    },
  ],
  feeds: [
    {
      id: "feed-1",
      name: "Tech Feed",
      url: "/tech-feed",
      type: "feeds",
      subCollections: [],
    },
    {
      id: "aquatic-feed-1",
      name: "Aquatic Feed",
      url: "/aquatic-feed",
      type: "feeds",
      subCollections: [],
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

const searchModal = ({ isModalOpen, setIsModalOpen }) => {
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
  return currentUrl === activeUrl;
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
  currentUrl
) => {
  return Object.keys(sidebarNavItems).map((key, index) => (
    <React.Fragment key={index + "_category"}>
      <ListSubheader
        onHoverActions={mapIconsToActions(myLibraryOnHoverActionIcons)}
      >
        {camelCaseToString(key)}
      </ListSubheader>
      {sidebarNavItems[key].map((item, ItemIndex) => {
        const isOpen = !!openItems[item.id];
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
            {item.subCollections.length > 0 ? (
              <Collapse
                key={item.subCollections.id + "wrapper"}
                as="li"
                isOpen={isOpen}
              >
                {item.subCollections.map((subItem, subItemIndex) => (
                  <StyledLink
                    to={subItem.url}
                    key={subItemIndex + "_subMenuItem"}
                  >
                    <ListItem
                      key={subItem.id}
                      leftIcon={collectionTypeIcons[subItem.type]}
                      onHoverActions={mapIconsToActions(
                        ListMyLibraryOnHoverActionIcons
                      )}
                      iconSize={0.8}
                      sx={{ paddingLeft: "32px" }}
                      itemId={subItem.id}
                      isActive={isListIndexActive(subItem.url, currentUrl)}
                      as="div"
                    >
                      {subItem.name}
                    </ListItem>
                  </StyledLink>
                ))}
              </Collapse>
            ) : (
              <Collapse
                isOpen={isOpen}
                key={item.subCollections.id + "_noSubItems"}
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
};

const mapIconsToActions = (icons) => {
  return Object.entries(icons).map(([key, iconPath], index) => {
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
          iconPath={iconPath}
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

  const location = useLocation();

  const currentUrl = location.pathname;

  const { isLeftSidebarOpen, isRightSidebarOpen, rightSidebarContent } =
    useSidebar();

  // set default current path matched directory opened by default on load
  const defaultOpenItems = Object.values(sidebarNavItems).reduce((acc, cur) => {
    const items = Array.isArray(cur) ? cur : [cur];
    for (const item of items) {
      if (item.subCollections.some((subItem) => subItem.url === currentUrl)) {
        acc[item.id] = true;
        break;
      }
    }
    return acc;
  }, {});

  const [openItems, setOpenItems] = useState(defaultOpenItems);

  const listItemOnClick = (collection) => {
    setOpenItems({ ...openItems, [collection.id]: !openItems[collection.id] });
  };

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
              isActive={currentUrl === "/home"}
            >
              Home
            </ListItem>
          </StyledLink>
        </List>
        <StyledScrollableArea>
          {renderTreeView(
            sidebarNavItems,
            openItems,
            theme,
            listItemOnClick,
            currentUrl
          )}
        </StyledScrollableArea>
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

      {searchModal({ isModalOpen, setIsModalOpen })}
    </StyledContainer>
  );
}
