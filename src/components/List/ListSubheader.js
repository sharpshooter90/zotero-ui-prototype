import { rgba } from "polished";
import React, { useState } from "react";
import styled from "styled-components";

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
  top: 2px;

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
const SubheaderContainer = styled.div`
  font-size: 14px;
  font-weight: 500;
  padding: 8px 16px;
  line-height: 15px;
  position: relative;
  /* identical to box height */

  letter-spacing: -0.02em;

  color: rgba(255, 255, 255, 0.62);

  &:hover {
    background-color: ${({ theme }) => theme.ListItem.background};
  }
`;

const ListSubheader = ({ children, onHoverActions }) => {
  const [hover, setHover] = useState(false);
  return (
    <SubheaderContainer
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}
      {hover && onHoverActions && (
        <StyledHoverActions>
          {onHoverActions.map((Action, index) => (
            <StyledAction key={index}>{Action}</StyledAction>
          ))}
        </StyledHoverActions>
      )}
    </SubheaderContainer>
  );
};

export default ListSubheader;
