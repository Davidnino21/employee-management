import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import "./index.css";
import App from "./App.jsx";
import ListUser from "./pages/ListUser.jsx";
import UserDetail from "./pages/UserDetail.jsx";
import EditUser from "./pages/EditUser.jsx";
import CreateUser from "./pages/CreateUser.jsx";

const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children: [
      {
        index: true,
        element: <ListUser />,
      },
      {
        path: "/:id",
        element: <UserDetail />,
      },
      {
        path: "/edit/:id",
        element: <EditUser />,
      },
      {
        path: "/create",
        element: <CreateUser />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>,
);
