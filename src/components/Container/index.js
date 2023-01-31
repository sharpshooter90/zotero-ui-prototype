import React from "react";
import styled from "styled-components";
import Sidebar from "../Sidebar";
import Main from "../Main";
import { List, ListItem } from "../List";
import SearchInput from "../SearchInput";
import IconButton from "../IconButton";
import { mdiLeadPencil, mdiDelete } from "@mdi/js";

const StyledContainer = styled.div`
  display: flex;
  height: calc(100vh - 80px);
  background: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
`;

export default function Container() {
  return (
    <StyledContainer>
      <Sidebar width={"280px"}>
        <SearchInput placeholder="search" />
        <List>
          <ListItem
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
            Item
          </ListItem>
        </List>
      </Sidebar>
      <Main />
      <Sidebar />
    </StyledContainer>
  );
}
