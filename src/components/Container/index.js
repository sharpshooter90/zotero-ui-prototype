import React from "react";
import styled from "styled-components";
import Sidebar from "../Sidebar";
import Main from "../Main";
import { List, ListItem } from '../List';
import SearchInput from '../SearchInput';

const StyledContainer = styled.div`
  display: flex;
  height: calc(100vh - 80px);
  background: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.textColor};
`;

export default function Container() {
  return (
    <StyledContainer>
      <Sidebar width={"280px"}>
      <SearchInput placeholder="search" />
        <List>
          <ListItem>Item</ListItem>
        </List>
      </Sidebar>
      <Main />
      <Sidebar />
    </StyledContainer>
  );
}
