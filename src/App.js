import React from "react";
import "react-tippy/dist/tippy.css";
import { createGlobalStyle } from "styled-components";
import Container from "./components/Container";
import Header from "./components/Header";
import { SidebarProvider, ZoteroThemeProvider } from "./context.config";

const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => props.theme.text};
    font-family: ${(props) => props.theme.fontFamily};
  }
`;
function App() {
  return (
    <ZoteroThemeProvider>
      <SidebarProvider>
        <Header />
        <Container />
      </SidebarProvider>
      <GlobalStyle />
    </ZoteroThemeProvider>
  );
}

export default App;
