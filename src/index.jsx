import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Contato from './routes/Contato'
import Blog from './routes/Blog'
import Sobre from './routes/Sobre'
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "contato",
        element: <Contato />
      },
      {
        path: "blog",
        element: <Blog />
      },
      {
        path: "sobre",
        element: <Sobre />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);