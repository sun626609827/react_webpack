import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home";
import About from "../About";
import BizCharts from "../BizCharts";
export default function Router() {
  return (
    <Routes>
      <Route path="/"  element={<Home />} />
      <Route path="/about"  element={<About />} />
      <Route path="/bizCharts"  element={<BizCharts />} />
    </Routes>
  );
}
