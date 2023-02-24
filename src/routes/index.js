import React from "react";
import { createBrowserRouter, Route, Routes } from "react-router-dom";

import DiscussingDesignDocument from "../pages/DiscussingDesignDocument";
import Home from "../pages/Home";
import NotesForDiscussingDesignDocument from "../pages/NotesForDiscussingDesignDocument";

const routes = createBrowserRouter;
const RouterConfig = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/home" element={<Home />} />

      <Route
        path="/book-reviews/discussing-design"
        element={<DiscussingDesignDocument />}
      />
      <Route
        path="/book-reviews/notes-for-this-book"
        element={<NotesForDiscussingDesignDocument />}
      />
    </Routes>
  );
};

export default RouterConfig;
