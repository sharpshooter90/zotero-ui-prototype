import { rgba } from "polished";
import React, { useState } from "react";
import { DragSizing } from "react-drag-sizing";
import { useTheme } from "styled-components";

const Sidebar = ({ width, dragHandlePosition, children }) => {
  const theme = useTheme();
  const [isDragging, setIsDragging] = useState(false);
  const handleEditorSizingStart = () => {
    setIsDragging(true);
  };

  const handleEditorSizingEnd = () => {
    setIsDragging(false);
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
          "2px solid" + isDragging
            ? rgba(theme.colors.primaryBg, 0.5)
            : "initial",
        transition: "background-color ease-in 0.2s",
      }}
      handlerWidth={1}
      style={{ minWidth: width }}
    >
      {children}
    </DragSizing>
  );
};

export default Sidebar;
