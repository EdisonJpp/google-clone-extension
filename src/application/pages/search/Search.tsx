import Header from "@/application/components/Header";
import SearchResults from "@/application/components/SearchResults";
import SearchImageResults from "@/application/components/SearchImageResults";
import { useLoaderData } from "react-router-dom";
import { ResultInterface } from "@/application/lib/interfaces/result.interface";
import { ResultImageInterface } from "../../lib/interfaces/result-image.interface";
import useQueryParams from "../../lib/hooks/useQueryParams";

const components = {
  "": (results: ResultInterface) => <SearchResults results={results} />,
  image: (results: ResultInterface<ResultImageInterface>) => (
    <SearchImageResults results={results} />
  ),
};

function Search() {
  const { searchQuery } = useQueryParams();
  const results = useLoaderData();

  const searchType = searchQuery.get("searchType") || "";

  return (
    <div>
      <Header />
      {components[searchType](results)}
    </div>
  );
}

export default Search;
