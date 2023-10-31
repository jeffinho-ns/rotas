import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// eslint-disable-next-line no-unused-vars
import {createBrowserRouter, RouterProvider, Route } from "react-router-dom";

//Importar as páginas 

import Home from "./routes/Home";
import Sobre from "./routes/Sobre"
import NewPost from "./routes/NewPost";



import "./index.css";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Sobre",
        element: <Sobre />,
      },
      {
        path: "/new",
        element: <NewPost />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
