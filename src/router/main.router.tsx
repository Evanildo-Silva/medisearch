import { createBrowserRouter } from "react-router-dom";
import { FavoritesPage } from "../pages/favoritesPage";
import { LoginPage } from "../pages/loginPage";
import { SearchPage } from "../pages/searchPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/medi-search",
    element: <SearchPage />,
  },
  {
    path: "/favoritos",
    element: <FavoritesPage />,
  },
]);

export { router };
