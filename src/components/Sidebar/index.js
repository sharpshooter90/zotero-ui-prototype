import React from "react";
import { DragSizing } from "react-drag-sizing";
import { useTheme } from "styled-components";

const Sidebar = ({ width, dragHandlePosition, children }) => {
  const theme = useTheme();

  return (
    <DragSizing
      border={dragHandlePosition}
      width={width}
      handlerStyle={{
        backgroundColor: theme.colors[theme.mode].border,
      }}
      handlerWidth={1}
      style={{ minWidth: width }}
    >
      {children}
    </DragSizing>
  );
};

export default Sidebar;
