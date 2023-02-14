import React from "react";
import styled from "styled-components";

const StyledMain = styled.main`
  flex-grow: 1;
  padding: 8px 24px;
`;

export default function Main({ children }) {
  return <StyledMain>{children}</StyledMain>;
}
