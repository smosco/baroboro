import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import HandleRedirect from "./pages/HandleRedirect";
import Write from "./pages/Write";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  { path: "/login", element: <Login /> },
  { path: "/oauth", element: <HandleRedirect /> },
  { path: "/write", element: <Write /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
