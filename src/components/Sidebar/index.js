import { rgba } from "polished";
import React, { useState } from "react";
import { DragSizing } from "react-drag-sizing";
import { useTheme } from "styled-components";

const Sidebar = ({ width, dragHandlePosition, children }) => {
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
    <DragSizing
      border={dragHandlePosition}
      width={width}
      onStart={handleEditorSizingStart}
      onEnd={handleEditorSizingEnd}
      handlerStyle={{
        backgroundColor: isDragging
          ? theme.colors.primaryBg
          : theme.colors[theme.mode].border,
        border:
          "3px solid" + isDragging
            ? rgba(theme.colors.primaryBg, 0.5)
            : "initial",
        transition: "background-color ease-in 0.2s",
      }}
      handlerWidth={handlerWidth}
      style={{ minWidth: width }}
    >
      {children}
    </DragSizing>
  );
};

export default Sidebar;
