import React from "react";
import styled from "styled-components";
import Sidebar from "../Sidebar";
import Main from "../Main";

const StyledContainer = styled.div`
  display: flex;
  height: calc(100vh - 80px);
`;

export default function Container() {
  return (
    <StyledContainer>
      <Sidebar />
      <Main />
      <Sidebar />
    </StyledContainer>
  );
}