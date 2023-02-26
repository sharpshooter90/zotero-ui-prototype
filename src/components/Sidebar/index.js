import { rgba } from "polished";
import React, { useState } from "react";
import { DragSizing } from "react-drag-sizing";
import styled, { css, keyframes, useTheme } from "styled-components";

const sidebarSlideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const StyledSidebar = styled(DragSizing)`
  transition: all 0.3s ease;
  background-color: ${(props) => props.theme.sidebar.background};
  // Apply the animation to the component using the animation property
  animation-name: ${({ isSidebarOpen }) => isSidebarOpen && sidebarSlideIn};
  animation-duration: 0.3s;
  animation-timing-function: ease-in-out;
  ${(props) => {
    switch (props.position) {
      case "left":
        return css`
          left: ${({ isSidebarOpen }) => (isSidebarOpen ? "0" : "-280px")};
          transform: translateX(${props.isSidebarOpen ? "0" : "-100%"});
        `;
      case "right":
        return css`
          right: ${({ isSidebarOpen }) => (isSidebarOpen ? "0" : "-280px")};
          transform: translateX(${props.isSidebarOpen ? "0" : "100%"});
        `;
      // case "top":
      //   return css`
      //     top: 0;
      //     left: 0;
      //     right: 0;
      //     height: 200px;
      //     transform: translateY(${props.isOpen ? "0" : "-100%"});
      //   `;
      // case "bottom":
      //   return css`
      //     bottom: 0;
      //     left: 0;
      //     right: 0;
      //     height: 200px;
      //     transform: translateY(${props.isOpen ? "0" : "100%"});
      //   `;
      default:
        return css`
          left: 0;
        `;
    }
  }}
`;
const Sidebar = ({ isOpen, width, dragHandlePosition, children, position }) => {
  const theme = useTheme();

  const [isDragging, setIsDragging] = useState(false);
  const [handlerWidth, setHandlerWidth] = useState(1);
  const handleEditorSizingStart = () => {
    setIsDragging(true);
    setHandlerWidth(3);
  };

  const handleEditorSizingEnd = () => {
    setIsDragging(false);
    setHandlerWidth(1);
  };

  return (
    <StyledSidebar
      border={dragHandlePosition}
      width={width}
      onStart={handleEditorSizingStart}
      onEnd={handleEditorSizingEnd}
      handlerStyle={{
        backgroundColor: isDragging
          ? theme.dragHandle.backgroundColor
          : theme.border,
        border:
          "3px solid" + isDragging
            ? rgba(theme.dragHandle.backgroundColor, 0.5)
            : "initial",
        transition: "background-color ease-in 0.2s",
      }}
      handlerWidth={handlerWidth}
      style={{ minWidth: width }}
      isSidebarOpen={isOpen}
      position={position || "left"}
    >
      {children}
    </StyledSidebar>
  );
};

export default Sidebar;
