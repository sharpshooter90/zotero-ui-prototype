import React, { createContext, useContext, useEffect, useState } from "react";

const SidebarContext = createContext();

// #TODO: optimize the getItem code
const SidebarProvider = ({ children }) => {
  const [isRightSidebarOpen, setRightIsSidebarOpen] = useState(() => {
    const storedValue = localStorage.getItem("isRightSidebarOpen");
    const initialValue = storedValue ? JSON.parse(storedValue) : true;
    return initialValue;
  });
  const [isLeftSidebarOpen, setLeftIsSidebarOpen] = useState(() => {
    const storedValue = localStorage.getItem("isLeftSidebarOpen");
    const initialValue = storedValue ? JSON.parse(storedValue) : true;
    return initialValue;
  });

  const [rightSidebarContent, setRightSidebarContent] = useState(null);

  //  Can make sidebar object in local storage
  useEffect(() => {
    // load the sidebar state from local storage on component mount

    const storedRightSidebarState = localStorage.getItem("isRightSidebarOpen");
    if (storedRightSidebarState !== null) {
      setRightIsSidebarOpen(JSON.parse(storedRightSidebarState));
    }

    const storedLeftSidebarState = localStorage.getItem("isLeftSidebarOpen");
    if (storedLeftSidebarState !== null) {
      setLeftIsSidebarOpen(JSON.parse(storedLeftSidebarState));
    }
  }, []);

  useEffect(() => {
    // save the sidebar state to local storage whenever it changes
    localStorage.setItem(
      "isLeftSidebarOpen",
      JSON.stringify(isLeftSidebarOpen)
    );
  }, [isLeftSidebarOpen]);
  useEffect(() => {
    // save the sidebar state to local storage whenever it changes
    localStorage.setItem(
      "isRightSidebarOpen",
      JSON.stringify(isRightSidebarOpen)
    );
  }, [isRightSidebarOpen]);

  const leftToggleSidebar = () => {
    setLeftIsSidebarOpen(!isLeftSidebarOpen);
  };
  const rightToggleSidebar = () => {
    setRightIsSidebarOpen(!isRightSidebarOpen);
  };

  const resetRightSidebarContent = () => {
    setRightSidebarContent("");
  };

  const value = {
    isLeftSidebarOpen,
    isRightSidebarOpen,
    rightSidebarContent,
    leftToggleSidebar,
    rightToggleSidebar,
    setRightIsSidebarOpen,
    setRightSidebarContent,
    resetRightSidebarContent, // Define a function to reset the value to default
  };

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
};

const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};

export { SidebarProvider, useSidebar };
