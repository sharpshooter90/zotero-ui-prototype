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
  width: 175px;
  height: 86px;
  order: 0;
  flex-grow: 1;
  padding: 16px 24px;
  border-radius: 0.5rem;
  box-shadow: 0 0.1rem 0.5rem rgba(0, 0, 0, 0.1);
  background-color: ${(props) => props.theme.card.background};
  transition: all 0.2s ease-in-out;

  &:nth-last-of-type(-n + 2) {
    flex: 0;
    min-width: 195px;
  }

  &:hover {
    cursor: pointer;
    background: ${rgba("#272727", 0.4)};
  }
`;

const ActionCard = ({ iconPath, iconSize, title }) => {
  return (
    <StyledCardContainer>
      <Icon path={iconPath || mdiPlusBox} size={iconSize || 1} />
      <span>{title}</span>
    </StyledCardContainer>
  );
};

export default ActionCard;
