import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished'
import Icon from '@mdi/react';
import { mdiHome } from '@mdi/js';


const ListStyled = styled.ul`
    padding: 0;
`;

const ListItemStyled = styled.li`
    background-color: transparent;
    padding: ${props => props.theme.spacing.md}px;
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover {
      background-color: ${({ theme }) => theme.ListItem.background};
    }
    svg {
      margin-right: 8px;
    }
`;


const List = ({ children }) => {
  return <ListStyled>{children}</ListStyled>;
};

const ListItem = ({ children, leftIcon, rightIcon, isActive, iconSize=1  }) => {
  return (
    <ListItemStyled isActive={isActive}>
      {leftIcon && <Icon path={leftIcon} size={iconSize} />}
      {children}
      {rightIcon && <Icon path={rightIcon} size={iconSize} />}
    </ListItemStyled>
  );
};

ListItem.defaultProps = {
  leftIcon: mdiHome,
  rightIcon: null,
  isActive: false,
  iconSize: 1,
};

export { List, ListItem };
