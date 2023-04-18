import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import HandleRedirect from "./pages/HandleRedirect";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  { path: "/login", element: <Login /> },
  { path: "/oauth", element: <HandleRedirect /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
