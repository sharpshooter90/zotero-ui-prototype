import React from "react";
import styled, { css } from "styled-components";
import { Icon } from "@mdi/react";

const Button = styled.button`
  border: none;
  border-radius: 4px;
  padding: ${({ theme, size }) => theme.button.spacing[size]};
  font-size: ${props => props.theme.fontSizes[props.size]};
  font-weight: ${props => props.theme.fontWeights[props.weight]};
  color: ${props => props.theme.colors[props.variant]};
  background-color: ${props => props.theme.colors[`${props.variant}Bg`]};
  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
  display: flex;
  align-items: center;
  justify-content: center;
  & svg {
    margin-right: 10px;
  }
`;

Button.defaultProps = {
  variant: "primary",
  size: "md",
  spacing: "md",
  iconSize: 1,
  weight: "medium",
  disabled: false
};

export default ({
  variant = "primary",
  size = "md",
  spacing = "md",
  iconSize = 1,
  disabled = false,
  leftIcon,
  rightIcon,
  weight,
  children
}) => (
  <Button variant={variant} size={size} spacing={size} disabled={disabled} >
    {leftIcon && <Icon path={leftIcon} size={iconSize} />}
    {children}
    {rightIcon && <Icon path={rightIcon} size={iconSize} />}
  </Button>
);