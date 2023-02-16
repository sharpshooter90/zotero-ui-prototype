import React from "react";

const RightSidebarContext = React.createContext({
  isRightSidebarVisible: true,
  setIsRightSidebarVisible: () => {},
});

export { RightSidebarContext };
