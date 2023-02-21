import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "react-tippy/dist/tippy.css";
import { ThemeProvider } from "styled-components";
import Container from "./components/Container";
import Header from "./components/Header";
import { SidebarProvider } from "./context.config";
import theme from "./theme";

function App() {
  const [isRightSidebarVisible, setIsRightSidebarVisible] = useState(true);

  const location = useLocation();

  useEffect(() => {
    // reset isRightSidebarVisible to false when location changes
    return () => {
      setIsRightSidebarVisible(true);
    };
  }, [location]);

  return (
    <ThemeProvider theme={theme}>
      <SidebarProvider>
        <Header />
        <Container />
      </SidebarProvider>
    </ThemeProvider>
  );
}

export default App;
