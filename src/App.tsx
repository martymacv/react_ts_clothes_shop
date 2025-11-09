import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Layout from "./components/Layout";
import { subscribeAction } from "./actions/subscribeAction";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    action: subscribeAction,
    children: [
      {
        index: true,
        element: <Home />        
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App
