import Icon from "@mdi/react";
import React from "react";
import styled from "styled-components";

const StyledIconButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const IconButton = ({ iconPath, onClick, size, iconColor }) => (
  <StyledIconButton onClick={onClick}>
    <Icon path={iconPath} size={size} color={iconColor} />
  </StyledIconButton>
);

export default IconButton;
