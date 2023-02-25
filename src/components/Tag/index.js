import React, { useState } from "react";
import styled from "styled-components";

import Icon from "@mdi/react";

const sizes = {
  small: {
    fontSize: "12px",
    padding: "4px 12px",
  },
  medium: {
    fontSize: "14px",
    padding: "6px 12px",
  },
  large: {
    fontSize: "16px",
    padding: "8px 16px",
  },
};

const TagWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: ${(props) => sizes[props.size].fontSize};
  padding: ${(props) => sizes[props.size].padding};
  border-radius: 24px;
  border: 1px solid ${(props) => props.theme.colors.border};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.backgroundHover};
  }

  ${(props) =>
    props.active &&
    `
    background-color: ${props.theme.colors.gray};
    color: ${props.theme.colors.text};
    border-color: ${props.theme.colors.border};
  `}
`;

const LeftIconWrapper = styled.span`
  margin-right: 4px;
  display: inline-flex;
`;

const RightIconWrapper = styled.span`
  margin-left: 4px;
  display: inline-flex;
`;

const Tag = ({ title, size = "medium", leftIcon, rightIcon }) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <TagWrapper size={size} active={active} onClick={handleClick}>
      {leftIcon && (
        <LeftIconWrapper>
          {" "}
          <Icon path={leftIcon} size={0.6} />
        </LeftIconWrapper>
      )}
      {title}
      {rightIcon && (
        <RightIconWrapper>
          <Icon path={rightIcon} size={0.6} />
        </RightIconWrapper>
      )}
    </TagWrapper>
  );
};

export default Tag;
