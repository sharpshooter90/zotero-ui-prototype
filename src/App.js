import React from "react";
import "react-tippy/dist/tippy.css";
import { ThemeProvider } from "styled-components";
import Container from "./components/Container";
import Header from "./components/Header";
import { SidebarProvider } from "./context.config";
import theme from "./theme";

function App() {
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
