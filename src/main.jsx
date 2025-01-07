import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cairo from "./Routes/Cairo/Cairo.jsx";
import RootLayout from "./Routes/RootLayout/RootLayout.jsx";
import Tanta from "./Routes/Tanta/Tanta.jsx";
import "./components/Translation/i18n.jsx";
import Zagazig from "./Routes/Zagazig/Zagazig.jsx";
import Almahala from "./Routes/Almahala/Almahala.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "tanta",
        element: <Tanta />,
      },
      {
        path: "almahala",
        element: <Almahala />,
      },
      {
        path: "zagazig",
        element: <Zagazig />,
      },
      {
        path: "cairo",
        element: <Cairo />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={routes} />
);
