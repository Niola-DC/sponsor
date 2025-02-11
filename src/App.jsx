import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/layout";
import Landing from "./pages/landing";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [{ index: true, element: <Landing /> }],
    },
  ]);

  return <RouterProvider router={router} />;
}
