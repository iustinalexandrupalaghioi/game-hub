import { createBrowserRouter } from "react-router-dom";
import GameDetailsPage from "./pages/GameDetailsPage";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/games/:slug", element: <GameDetailsPage /> },
    ],
  },
]);

export default router;
