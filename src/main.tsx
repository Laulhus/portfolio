import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage.tsx";
import Main from "./pages/Main.tsx";
import TechStack from "./pages/TechStack.tsx";
import Experience from "./pages/Experience.tsx";
import Projects from "./pages/Projects.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/tech",
        element: <TechStack />,
      },
      {
        path: "/experience",
        element: <Experience />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
