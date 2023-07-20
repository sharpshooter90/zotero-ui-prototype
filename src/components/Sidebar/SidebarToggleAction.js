import {
  mdiPageLayoutSidebarLeft,
  mdiPageLayoutSidebarRight,
  mdiInformation,
} from "@mdi/js";
import React from "react";
import { useSidebar } from "../../context.config";
import IconButton from "../IconButton";

const LeftSidebarToggleButton = () => {
  const { isLeftSidebarOpen, leftToggleSidebar } = useSidebar();

  return (
    <IconButton
      onClick={leftToggleSidebar}
      iconPath={
        isLeftSidebarOpen === true
          ? mdiPageLayoutSidebarLeft
          : mdiPageLayoutSidebarRight
      }
    />
  );
};

const RightSidebarToggleButton = () => {
  const { isRightSidebarOpen, rightToggleSidebar } = useSidebar();

  return <IconButton onClick={rightToggleSidebar} iconPath={mdiInformation} />;
};

export { LeftSidebarToggleButton, RightSidebarToggleButton };
