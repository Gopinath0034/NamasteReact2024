import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Body from "./Body";
import About from "../src/Screen/About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Applayout = () => {
  return (
    <div className="app">
      <App />
      <Body />
    </div>
  );
};
const appRouter = createBrowserRouter([
  { path: "/", element: <Applayout /> },
  { path: "/about", element: <About /> },
]);
root.render(<RouterProvider router={appRouter} />);
