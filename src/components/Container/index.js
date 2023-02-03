import React from "react";
import styled, { useTheme } from "styled-components";
import Sidebar from "../Sidebar";
import Main from "../Main";
import { List, ListItem } from "../List";
import SearchInput from "../SearchInput";
import IconButton from "../IconButton";
import { mdiLeadPencil, mdiDelete, mdiHome, mdiFolder } from "@mdi/js";
import ListSubheader from "../List/ListSubheader";

const StyledContainer = styled.div`
  display: flex;
  height: calc(100vh - 67px);
  background: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
`;

export default function Container() {
  const theme = useTheme();
  return (
    <StyledContainer>
      <Sidebar width={"280px"}>
        <SearchInput placeholder="search" />
        <List>
          <ListSubheader>My Library</ListSubheader>

          <ListItem
            leftIcon={mdiHome}
            onHoverActions={[
              <IconButton
                iconPath={mdiLeadPencil}
                size={0.6}
                onClick={() => console.log("edit")}
              />,
              <IconButton
                iconPath={mdiDelete}
                size={0.6}
                onClick={() => console.log("delete")}
              />,
            ]}
          >
            Home
          </ListItem>
          <ListItem
            leftIcon={mdiFolder}
            leftIconColor={theme.colors.iconFolderColor}
            onHoverActions={[
              <IconButton
                iconPath={mdiLeadPencil}
                size={0.6}
                onClick={() => console.log("edit")}
              />,
              <IconButton
                iconPath={mdiDelete}
                size={0.6}
                onClick={() => console.log("delete")}
              />,
            ]}
          >
            Home
          </ListItem>
          <ListItem
            leftIcon={mdiFolder}
            onHoverActions={[
              <IconButton
                iconPath={mdiLeadPencil}
                size={0.6}
                onClick={() => console.log("edit")}
              />,
              <IconButton
                iconPath={mdiDelete}
                size={0.6}
                onClick={() => console.log("delete")}
              />,
            ]}
          >
            Home
          </ListItem>
        </List>
      </Sidebar>
      <Main />
      <Sidebar />
    </StyledContainer>
  );
}
