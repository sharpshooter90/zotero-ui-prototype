import { mdiPlusBox } from "@mdi/js";
import Icon from "@mdi/react";
import { rgba } from "polished";
import React from "react";
import { Link } from "react-router-dom";
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

const StyledLink = styled(Link)`
  color: ${(props) => props.theme.colors[props.theme.mode].text};
  text-decoration: none;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ActionCard = ({ iconPath, iconSize, title, sx, onClick, linkTo }) => {
  return linkTo === undefined ? (
    <StyledCardContainer style={sx} onClick={onClick}>
      <Icon path={iconPath || mdiPlusBox} size={iconSize || 1} />
      <StyledCardTitle>{title}</StyledCardTitle>
    </StyledCardContainer>
  ) : (
    <StyledCardContainer style={sx} onClick={onClick}>
      <StyledLink to={linkTo}>
        <Icon path={iconPath || mdiPlusBox} size={iconSize || 1} />
        <StyledCardTitle>{title}</StyledCardTitle>
      </StyledLink>
    </StyledCardContainer>
  );
};

export default ActionCard;
