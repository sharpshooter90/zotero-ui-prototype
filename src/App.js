import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "react-tippy/dist/tippy.css";
import { ThemeProvider } from "styled-components";

import Container from "./components/Container";
import Header from "./components/Header";
import { RightSidebarContext } from "./context.config";
import theme from "./theme";

function App() {
  const [isRightSidebarVisible, setIsRightSidebarVisible] = useState(true);

  const location = useLocation();

  useEffect(() => {
    setIsRightSidebarVisible(true); // set default value for isRightSidebarVisible

    // reset isRightSidebarVisible to false when location changes
    return () => {
      setIsRightSidebarVisible(true);
    };
  }, [location]);

  return (
    <ThemeProvider theme={theme}>
      <RightSidebarContext.Provider
        value={{ isRightSidebarVisible, setIsRightSidebarVisible }}
      >
        <Header />
        <Container />
      </RightSidebarContext.Provider>
    </ThemeProvider>
  );
}

export default App;
