import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import useQueryParams from "@/application/lib/hooks/useQueryParams";

function PaginationButtons() {
  const { searchQuery, handleSetQuery } = useQueryParams();

  const startIndex = Number(searchQuery.get("page")) || 0;

  return (
    <div className="flex justify-between max-w-lg text-blue-500 pb-4 space-x-4 ">
      {startIndex >= 10 && (
        <span onClick={() => handleSetQuery("page", startIndex - 10)}>
          <div className="flex flex-grow flex-col items-center cursor-pointer hover:underline btn">
            <ChevronLeftIcon className="h-5" />
            <p>Previous</p>
          </div>
        </span>
      )}

      <span onClick={() => handleSetQuery("page", startIndex + 10)}>
        <div className="flex flex-grow flex-col items-center cursor-pointer hover:underline btn">
          <ChevronRightIcon className="h-5" />
          <p>Next</p>
        </div>
      </span>
    </div>
  );
}

export default PaginationButtons;
