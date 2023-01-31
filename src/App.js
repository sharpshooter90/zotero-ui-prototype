import React from "react";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Container from "./components/Container";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
          <Header />
          <Container />

    </ThemeProvider>
  );
}

export default App;
