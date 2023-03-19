import { useNavigate, useSearchParams } from "react-router-dom";

export type SearchParamsType = "q" | "page" | "searchType";

const useQueryParams = (navigateTo = "/search") => {
  const navigate = useNavigate();
  const [searchQuery] = useSearchParams();

  const handleSetQuery = (
    name: SearchParamsType,
    value: string | number,
    excludes?: SearchParamsType[]
  ) => {
    const payload = {};

    searchQuery.forEach((value, key) => {
      payload[key] = value;
    });

    payload[name] = value.toString();

    //  -- mutate payload -- //
    deleteNulls(payload);
    excludes && handleExcludes(excludes, payload);
    // --  end mutate payload -- //

    const query = new URLSearchParams(payload).toString();
    navigate(`${navigateTo}?${query}`);
  };

  const deleteNulls = (payload: Record<string, string>) => {
    for (const key in payload) {
      if (!payload[key]) {
        delete payload[key];
      }
    }
  };

  const handleExcludes = (excludes: SearchParamsType[], payload) => {
    excludes.forEach((key) => {
      delete payload[key];
    });
  };

  return {
    searchQuery,
    handleSetQuery,
  };
};

export default useQueryParams;
