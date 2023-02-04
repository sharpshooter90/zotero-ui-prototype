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
} from "@mdi/js";
import ListSubheader from "../List/ListSubheader";
import Collapse from "../Collapse";

const StyledContainer = styled.div`
  display: flex;
  height: calc(100vh - 67px);
  background: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
`;

const onHoverActionIcons = {
  search: mdiMagnify,
  // edit: mdiPencilOutline,
  // delete: mdiDeleteOutline,
  newFolder: mdiFolderPlusOutline,
  newFile: mdiFilePlusOutline,
  more: mdiDotsVertical,
};
const onHoverActions = Object.entries(onHoverActionIcons).map(
  ([key, value]) => {
    return (
      <Tooltip
        title={key.replace(/([a-z0-9])([A-Z])/g, "$1 $2")}
        position="top"
        style={{ textTransform: "lowercase" }}
        delay={600}
        size="small"
      >
        <IconButton
          iconPath={value}
          key={key}
          size={0.7}
          onClick={() => console.log("action: " + key)}
        />
      </Tooltip>
    );
  }
);
export default function Container() {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(true);
  return (
    <StyledContainer>
      <Sidebar width={"280px"} dragHandlePosition="right">
        <List>
          <ListItem>
            <SearchInput placeholder="search" />
          </ListItem>
          <ListSubheader>My Library</ListSubheader>

          <ListItem
            leftIcon={mdiHome}
            onHoverActions={onHoverActions}
            iconSize={0.8}
          >
            Home
          </ListItem>
          <ListItem
            leftIcon={isOpen ? mdiFolderOpen : mdiFolder}
            leftIconColor={theme.colors.iconFolderColor}
            onHoverActions={onHoverActions}
            onClick={() => setIsOpen(!isOpen)}
            iconSize={0.8}
          >
            Expandable Parent
          </ListItem>
          <Collapse isOpen={isOpen}>
            <ListItem
              sx={{ paddingLeft: "32px" }}
              leftIcon={mdiFolder}
              leftIconColor={theme.colors.iconFolderColor}
              onHoverActions={onHoverActions}
              iconSize={0.8}
            >
              Expandable Children
            </ListItem>
          </Collapse>

          <ListItem
            leftIcon={mdiFolder}
            onHoverActions={onHoverActions}
            iconSize={0.8}
          >
            Home
          </ListItem>
        </List>
      </Sidebar>
      <Main />
      <Sidebar width={"280px"} dragHandlePosition="left">
        right sidebar
      </Sidebar>
    </StyledContainer>
  );
}
