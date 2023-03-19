import PaginationButtons from "./PaginationButtons";
import Footer from "./Footer";
import { FC } from "react";
import { ResultInterface } from "@/application/lib/interfaces/result.interface";
import { ResultImageInterface } from "../lib/interfaces/result-image.interface";

interface SearchImageResultsProps {
  results: ResultInterface<ResultImageInterface>;
}

const SearchImageResults: FC<SearchImageResultsProps> = ({ results }) => {
  return (
    <div>
      <div className="w-full px-3 my-4  font-OpenSans">
        <p className="text-gray-500 text-md mb-5 mt-3">
          About {results.searchInformation?.formattedTotalResults} results (
          {results.searchInformation?.formattedSearchTime} seconds)
        </p>

        <div className="grid grid-cols-3 sm:grid-cols-6 items-center gap-2">
          {results.items.map((item) => (
            <a
              href={item.image.contextLink}
              rel="noreferrer"
              target="_blank"
              key={item.link}
            >
              <div className="mb-4 " key={2}>
                <img
                  src={item.link}
                  className={`h-auto max-w-full`}
                  alt={item.htmlTitle}
                />
                <p>{item.title} </p>
              </div>
            </a>
          ))}
        </div>

        <PaginationButtons />
      </div>

      <Footer />
    </div>
  );
};

export default SearchImageResults;
