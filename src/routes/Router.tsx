import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard/views";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path={"*"} element={<Dashboard />} />
    </Routes>
  );
};

export default Router;
