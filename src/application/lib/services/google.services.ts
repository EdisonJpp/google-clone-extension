import { ResultInterface } from "@/application/lib/interfaces/result.interface";

// .env
const API_KEY = "AIzaSyCXv9IZeZzF3-DuGvTp_rtOCzekJ63RbkQ";
const CONTEXT_KEY = "a79cb5cfe9bb64add";
const API_URL = "https://www.googleapis.com";

async function searchGoogleService(
  query: string,
  page: number | string,
  searchType?: string
): Promise<ResultInterface> {
  const startIndex = page || "0";

  let url = `${API_URL}/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${query}&start=${startIndex}`;

  if (searchType) {
    url += `&searchType=${searchType}`;
  }

  const useDummyData = false; // true for devlopment (mock results)

  const data = useDummyData
    ? Response
    : await fetch(url).then((response) => response.json());

  return data;
}

export { searchGoogleService };
