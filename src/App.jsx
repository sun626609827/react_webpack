import React, { useCallback, useEffect, useState } from "react";
import "./App.less";
import { useNavigate } from "react-router-dom";
import Router from "./router";
const App = () => {
  React.$navigate = useNavigate();
  return (
    <div className="App">
      <div className="content">
        <Router />
      </div>
    </div>
  );
};
export default App;
