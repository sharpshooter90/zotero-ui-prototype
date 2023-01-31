import React from "react";
import styled from "styled-components";

const StyledSidebar = styled.aside`
  background-color: ${props => props.theme.backgroundColor};
  height: 100%;
  width: 300px;
  margin-right: 20px;
`;

export default function Sidebar() {
  return <StyledSidebar>Sidebar</StyledSidebar>;
}