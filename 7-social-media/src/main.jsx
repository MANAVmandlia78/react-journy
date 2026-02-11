import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Createpost from "./Components/Createpost.jsx";
import PostList from "./Components/PostList.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      { path: "/", element: <PostList></PostList> },
      { path: "/create-post", element: <Createpost></Createpost> },
    ],
  },
  // {path: "/",element: <App></App>},
  // {path: "/create-post", element: <Createpost></Createpost>}
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
