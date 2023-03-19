import { RouteObject } from "react-router-dom";
import { searchGoogleService } from "../../lib/services/google.services";
import Search from "./Search";

function loader({ request }) {
  const url = new URL(request.url);
  const query = url.searchParams.get("q");
  const page = url.searchParams.get("page");
  const searchType = url.searchParams.get("searchType");

  return searchGoogleService(query, page, searchType);
}

const searchRoutes: RouteObject[] = [
  {
    path: "/search",
    element: <Search />,
    loader,
  },
];

export default searchRoutes;
