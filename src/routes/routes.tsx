import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Components/Dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/*",
    errorElement: <div>404</div>,
    element: <Dashboard />,
  },
]);

export default router;
