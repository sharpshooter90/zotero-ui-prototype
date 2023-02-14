import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "react-tippy/dist/tippy.css";
import { ThemeProvider } from "styled-components";

import Container from "./components/Container";
import Header from "./components/Header";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Container />
      </Router>
    </ThemeProvider>
  );
}

export default App;
