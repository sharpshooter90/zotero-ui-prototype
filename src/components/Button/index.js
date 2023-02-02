import React from "react";
import styled, { css } from "styled-components";
import { Icon } from "@mdi/react";

const Button = styled.button`
  border: none;
  border-radius: 4px;
  padding: ${({ theme, size }) => theme.button.spacing[size]};
  font-size: ${(props) => props.theme.typography.fontSizes[props.size]};
  font-weight: ${(props) => props.theme.fontWeights[props.weight]};
  color: ${(props) => props.theme.colors[props.variant]};
  background-color: ${(props) => props.theme.colors[`${props.variant}Bg`]};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  gap: 10px;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme, variant }) =>
      theme.button.variants[variant].hoverBg};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.disabled};
    cursor: not-allowed;
  }
`;

Button.defaultProps = {
  variant: "primary",
  size: "md",
  iconSize: 1,
  disabled: false,
};

export default ({
  variant = "primary",
  size = "md",
  iconSize = 1,
  disabled = false,
  leftIcon,
  rightIcon,
  children,
}) => (
  <Button variant={variant} size={size} disabled={disabled}>
    {leftIcon && <Icon path={leftIcon} size={iconSize} />}
    {children}
    {rightIcon && <Icon path={rightIcon} size={iconSize} />}
  </Button>
);
