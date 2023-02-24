import React from "react";
import styled from "styled-components";
import { useSidebar } from "../../context.config";

const StyledMain = styled.main`
  flex-grow: 1;
  padding: 8px 24px;
  transition: all 0.4s ease;
  overflow: hidden auto;
`;

export default function Main({ children }) {
  const { isLeftSidebarOpen, isRightSidebarOpen } = useSidebar();
  return (
    <StyledMain
      isLeftSidebarOpen={isLeftSidebarOpen}
      isRightSidebarOpen={isRightSidebarOpen}
    >
      {children}
    </StyledMain>
  );
}
