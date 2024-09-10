import { Layout } from "@/components/layout";
import { createBrowserRouter } from "react-router-dom";
import { FavoritesPage } from "../pages/favoritesPage";
import { SearchPage } from "../pages/searchPage";

const router = createBrowserRouter([
  {
    path: "/medi-search",
    element: (
      <Layout>
        <SearchPage />
      </Layout>
    ),
  },
  {
    path: "/favoritos",
    element: (
      <Layout>
        <FavoritesPage />
      </Layout>
    ),
  },
]);

export { router };
