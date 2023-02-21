import React from "react";
import { Route, Routes } from "react-router-dom";

import DiscussingDesignDocument from "../pages/DiscussingDesignDocument";
import Home from "../pages/Home";
import NotesForDiscussingDesignDocument from "../pages/NotesForDiscussingDesignDocument";

const RouterConfig = () => {
  return (
    <Routes>
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
