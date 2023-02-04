import React, { useState } from "react";
import styled from "styled-components";
import { rgba } from "polished";
import Icon from "@mdi/react";

const ListStyled = styled.ul`
  padding: 0;
  margin: 8px 0;
`;

const ListItemStyled = styled.li`
  background-color: transparent;
  padding: ${(props) => props.theme.spacing.xs};
  font-size: ${(props) => props.theme.typography.fontSizes.sm};
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  gap: 8px;
  &:hover {
    background-color: ${({ theme }) => theme.ListItem.background};
  }
`;

const StyledHoverActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  right: 12px;
  background: ${rgba("black", 0.4)};
  backdrop-filter: blur(32px);
  height: 80%;
  border-radius: 6px;
  padding: 0px 12px;
  gap: 8px;

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
  subheader,
  leftIconColor,
  rightIconColor,
  onClick,
  sx,
}) => {
  const [hover, setHover] = useState(false);
  return (
    <ListItemStyled
      isActive={isActive}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
      style={sx}
    >
      {leftIcon && (
        <Icon path={leftIcon} size={iconSize} color={leftIconColor} />
      )}
      {subheader && { subheader }}
      {children}
      {rightIcon && (
        <Icon path={rightIcon} size={iconSize} color={rightIconColor} />
      )}
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
  rightIcon: null,
  isActive: false,
  iconSize: 1,
};

export { List, ListItem };
