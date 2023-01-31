import React, { useState } from "react";
import styled from "styled-components";
import { rgba } from "polished";
import Icon from "@mdi/react";
import { mdiHome } from "@mdi/js";

const ListStyled = styled.ul`
  padding: 0;
`;

const ListItemStyled = styled.li`
  background-color: transparent;
  padding: ${(props) => props.theme.spacing.md}px;
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.ListItem.background};
  }
  svg {
    margin-right: 8px;
  }
`;

const StyledHoverActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 20px;
  right: 0;

  svg {
    color: ${({ theme }) => theme.ListItem.onHoverIconColor};
  }
`;
const StyledAction = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  > * {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px 2px;
  }
`;

const List = ({ children }) => {
  return <ListStyled>{children}</ListStyled>;
};

const ListItem = ({
  children,
  leftIcon,
  rightIcon,
  isActive,
  iconSize = 1,
  onHoverActions,
}) => {
  const [hover, setHover] = useState(false);
  return (
    <ListItemStyled
      isActive={isActive}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {leftIcon && <Icon path={leftIcon} size={iconSize} />}
      {children}
      {rightIcon && <Icon path={rightIcon} size={iconSize} />}
      {hover && onHoverActions && (
        <StyledHoverActions>
          {onHoverActions.map((Action, index) => (
            <StyledAction key={index}>{Action}</StyledAction>
          ))}
        </StyledHoverActions>
      )}
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
