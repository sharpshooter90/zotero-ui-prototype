import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished'

const ListStyled = styled.ul`
    padding: 0;
`;

const ListItemStyled = styled.li`
    background-color: ;
    padding: ${props => props.theme.spacing.md}px;
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover {
      background-color: ${({ theme }) => theme.ListItem.background};
    }
`;

const List = ({ children }) => {
  return <ListStyled>{children}</ListStyled>;
};

const ListItem = ({ children }) => {
  return <ListItemStyled>{children}</ListItemStyled>;
};

export { List, ListItem };