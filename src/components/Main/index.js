import React from "react";
import styled, { css } from "styled-components";
import { useSidebar } from "../../context.config";

const sidebarSlideIn = css`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const StyledMain = styled.main`
  flex-grow: 1;
  padding: 8px 24px;

  padding-left: ${(props) =>
    props.isLeftSidebarOpen ? "calc(280px + 24px)" : "0"};
  padding-right: ${(props) =>
    props.isRightSidebarOpen ? "calc(280px + 24px)" : "0"};
  transition: all 0.4s ease;

  /* animation: ${({ isSidebarOpen }) =>
    isSidebarOpen && `${sidebarSlideIn} 0.4s ease-in-out`}; */
  padding-top: 60px;
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
