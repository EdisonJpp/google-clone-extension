import { FC, useRef } from "react";
import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/outline";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";
import { useNavigate } from "react-router-dom";
import useQueryParams from "../lib/hooks/useQueryParams";

const Header: FC = () => {
  const { searchQuery, handleSetQuery } = useQueryParams();

  const searchInputRef = useRef(null);
  const navigate = useNavigate();

  const search = (e) => {
    e.preventDefault();
    const query = searchInputRef.current.value;
    query && handleSetQuery("q", query, ["page"]);
  };

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
          height={40}
          width={120}
          onClick={() => navigate("/")}
          className="coursor-pointer"
        />

        <form className="flex flex-grow px-5 py-3 ml-10 mr-5 border boder-gray-200 rounded-full shadow-lg max-w-3xl items-center ">
          <input
            ref={searchInputRef}
            className="flex-grow w-full focus:outline-none text-[17px]"
            defaultValue={searchQuery.get("q")}
            type="text"
          />
          <XIcon
            className="h-7 sm:mr-3 text-gray-500 cursor-pointer tarnsition duration-100 transform hover:scale-125 "
            onClick={() => [(searchInputRef.current.value = "")]}
          />
          <MicrophoneIcon className="mr-3 h-6 hidden sm:inline-flex text-gray-500 border-l-2 pl-4 border-gray-300" />

          <button type="submit" onClick={search}>
            <SearchIcon className=" mb-1 h-5 hidden sm:inline-flex text-gray-500 tarnsition duration-100 transform hover:scale-125 " />
          </button>
        </form>
        <Avatar
          className="ml-auto"
          url="https://cdn.dribbble.com/users/81809/screenshots/3347540/media/fa6634d657c6b5a35d12b7df3698e3ba.jpg?compress=1&resize=400x300"
        />
      </div>
      <HeaderOptions />
    </header>
  );
};

export default Header;
