import HeaderOption from "./HeaderOption";
import {
  DotsVerticalIcon,
  MapIcon,
  NewspaperIcon,
  PhotographIcon,
  PlayIcon,
  SearchIcon,
} from "@heroicons/react/outline";
import useQueryParams from "../lib/hooks/useQueryParams";

function HeaderOptions() {
  const { searchQuery, handleSetQuery } = useQueryParams();
  const searchType = searchQuery.get("searchType");

  return (
    <div className="flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 boarer-b font-OpenSans">
      <div className="flex space-x-6">
        <span
          onClick={() =>
            handleSetQuery("searchType", "", ["page", "searchType"])
          }
        >
          <HeaderOption Icon={SearchIcon} title="All" selected={!searchType} />
        </span>
        <span onClick={() => handleSetQuery("searchType", "image", ["page"])}>
          <HeaderOption
            Icon={PhotographIcon}
            title="Images"
            selected={searchType === "image"}
          />
        </span>
        <a href="https://www.youtube.com">
          {" "}
          <HeaderOption Icon={PlayIcon} title="Videos" />
        </a>
        <a href="https://news.google.com">
          {" "}
          <HeaderOption Icon={NewspaperIcon} title="News" />
        </a>
        <a href="https://www.google.com/maps">
          {" "}
          <HeaderOption Icon={MapIcon} title="Maps" />
        </a>
        <a href="">
          {" "}
          <HeaderOption Icon={DotsVerticalIcon} title="More" />
        </a>
      </div>

      <div className="flex space-x-4">
        <a href="https://www.google.com/preferences?hl=en-IN&fg=1">
          <p className="link">Settings</p>
        </a>
        <p className="link">Tools</p>
      </div>
    </div>
  );
}

export default HeaderOptions;
