import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Body from "./Body";
import About from "../src/Screen/About";
import Error from "../src/Component/Error";
import Contact from "../src/Screen/Contact";
import ResturantMenu from "../src/Component/ResturantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Applayout = () => {
  return (
    <div className="app">
      <App />
      <Outlet />
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/resturant/:resid", element: <ResturantMenu /> },
    ],
    errorElement: <Error />,
  },
]);
root.render(<RouterProvider router={appRouter} />);
