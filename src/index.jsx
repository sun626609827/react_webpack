import React,{Suspense} from "react";
const App = React.lazy(()=>import("./App.jsx"))
import { BrowserRouter } from "react-router-dom";

import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <Suspense fallback={<div>正在拼命加载中......</div>}>
       <App />
    </Suspense>
  </BrowserRouter>
);
