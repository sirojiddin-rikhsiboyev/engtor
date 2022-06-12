import Login from "./../views/Login";
import Register from "./../views/Register";
import ForgotPassword from "./../views/ForgotPassword";
import NotFound from "./../views/NotFound";

import Home from "./../views/Home";
import Vocabulary from "./../views/Vocabulary";
import Definitions from "../views/Definitions";

export const routes = [
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        children: [{ path: "/:id", element: <Vocabulary /> }],
      },
      {
        path: "/definitions",
        children: [{ path: "/:id", element: <Definitions /> }],
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/forgotPassword",
    element: <ForgotPassword />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
