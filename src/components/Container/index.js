import React, { useState } from "react";
import styled, { useTheme } from "styled-components";
import { Tooltip } from "react-tippy";
import Sidebar from "../Sidebar";
import Main from "../Main";
import { List, ListItem } from "../List";
import SearchInput from "../SearchInput";
import IconButton from "../IconButton";
import {
  mdiPencilOutline,
  mdiDeleteOutline,
  mdiFolderPlusOutline,
  mdiFilePlusOutline,
  mdiMagnify,
  mdiHome,
  mdiFolder,
  mdiFolderOpen,
  mdiDotsVertical,
  mdiPlus,
  mdiFile,
  mdiBook,
} from "@mdi/js";
import ListSubheader from "../List/ListSubheader";
import Collapse from "../Collapse";

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
const myLibraryCollections = {
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
};

const mapCollections = (
  collections,
  setIsOpen,
  openItems,
  handleClick,
  theme
) => {
  return Object.values(collections).map((item, index) => {
    const isOpen = !!openItems[item.id];
    return (
      <React.Fragment key={index}>
        <ListItem
          leftIcon={isOpen ? mdiFolderOpen : mdiFolder}
          leftIconColor={theme.colors.iconFolderColor}
          onHoverActions={mapIconsToActions(ListMyLibraryOnHoverActionIcons)}
          onClick={() => handleClick(item.id)}
          iconSize={0.8}
          key={item.id}
          itemId={item.id}
        >
          {item.name}
        </ListItem>
        {item.subcollections.map((subItem) => {
          return (
            <Collapse isOpen={isOpen} key={subItem.id + "wrapper"}>
              <ListItem
                key={subItem.id}
                leftIcon={collectionTypeIcons[subItem.type]}
                onHoverActions={mapIconsToActions(
                  ListMyLibraryOnHoverActionIcons
                )}
                iconSize={0.8}
                sx={{ paddingLeft: "32px" }}
                itemId={subItem.id}
              >
                {subItem.name}
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
  const [isOpen, setIsOpen] = useState(true);
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
            <SearchInput placeholder="search" />
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
            myLibraryCollections.collections,
            setIsOpen,
            openItems,
            handleClick,
            theme
          )}
        </List>
      </Sidebar>
      <Main />
      <Sidebar width={"280px"} dragHandlePosition="left">
        right sidebar
      </Sidebar>
    </StyledContainer>
  );
}
