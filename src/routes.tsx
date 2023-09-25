import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/layout";
import Homepage from "./pages/Homepage";
import GameDetailPage from "./pages/GameDetailPage";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { index: true, element: <Homepage></Homepage> },
      { path: "games/:slug", element: <GameDetailPage></GameDetailPage> },
    ],
  },
]);

export default router;
