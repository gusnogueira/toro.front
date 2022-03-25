import React from "react";
import { Routes, Route } from "react-router-dom";

const Router: React.FC = () => (
  <Routes>
    <Route path={"*"} element={<h1>teste</h1>} />
  </Routes>
);

export default Router;
