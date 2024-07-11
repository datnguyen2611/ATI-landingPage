import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StyleProvider } from "@ant-design/cssinjs";
import App from "./App.tsx";
import "./index.css";
import MainLayout from "@/layouts/MainLayout.tsx";
import { Page } from "@/types/index.ts";
import Home from "@/pages/Home.tsx";
import { Toaster } from "sonner";
import About from "./pages/About.tsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <MainLayout />,
        children: [
          {
            path: Page.home,
            element: <Home />,
          },
          {
            path: Page.about,
            element: <About />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StyleProvider hashPriority="high">
      <RouterProvider router={router} />
      <App />
      <Toaster
        richColors
        position="top-center"
        toastOptions={{ style: { fontFamily: "'AvertaStdCY', sans-serif" } }}
      />
    </StyleProvider>
  </React.StrictMode>,
);
