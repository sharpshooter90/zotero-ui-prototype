import React from "react";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Container from "./components/Container";
import theme from "./theme";
import "react-tippy/dist/tippy.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Container />
    </ThemeProvider>
  );
}

export default App;
