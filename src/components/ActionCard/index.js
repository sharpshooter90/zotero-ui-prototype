import { mdiPlusBox } from "@mdi/js";
import Icon from "@mdi/react";
import { rgba } from "polished";
import React from "react";
import styled from "styled-components";

const StyledCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  box-sizing: border-box;
  flex: 0 0 33.333333%;
  height: 86px;
  order: 0;
  padding: 16px 24px;
  border-radius: 0.5rem;
  box-shadow: 0 0.1rem 0.5rem rgba(0, 0, 0, 0.1);
  background-color: ${(props) => props.theme.card.background};
  transition: all 0.2s ease-in-out;
  min-height: 120px;

  /* &:nth-last-of-type(-n + 2) {
    flex: 0;
    min-width: 195px;
  } */

  &:hover {
    cursor: pointer;
    background: ${rgba("#272727", 0.4)};
  }
`;
const StyledCardTitle = styled.div`
  font-size: ${(props) => props.theme.card.fontSize};
`;

const ActionCard = ({ iconPath, iconSize, title, sx }) => {
  return (
    <StyledCardContainer style={sx}>
      <Icon path={iconPath || mdiPlusBox} size={iconSize || 1} />
      <StyledCardTitle>{title}</StyledCardTitle>
    </StyledCardContainer>
  );
};

export default ActionCard;
