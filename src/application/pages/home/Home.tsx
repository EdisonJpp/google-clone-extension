import Avatar from "@/application/components/Avatar";
import Footer from "@/application/components/Footer";
import { ViewGridIcon } from "@heroicons/react/solid";
import { SearchIcon, MicrophoneIcon } from "@heroicons/react/outline";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import googleSecurity from "@/assets/img/google-account-security.png";

export default function Home() {
  const navigate = useNavigate();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const q = searchInputRef.current.value;
    q && navigate(`/search?q=${q}`);
  };

  return (
    <div className="flex flex-col items-center h-screen ">
      {/* header */}
      <header className="flex w-full p-5 justify-between text-sm text-gray-800">
        {/*left section*/}
        <div className="flex space-x-4 items-center font-Ubuntu">
          <a href="https://about.google/?utm_source=google-IN&utm_medium=referral&utm_campaign=hp-footer&fg=1">
            <p className="link">About</p>
          </a>
          <a href="https://chrome.google.com/webstore">
            <p className="link">Webstore</p>
          </a>
        </div>

        {/*right section*/}
        <div className="flex space-x-4 font-Ubuntu items-center">
          <a href="https://mail.google.com">
            <p className="link">Gmail</p>
          </a>
          <a href="https://www.google.com/imghp?hl=en">
            <p className="link">Images</p>
          </a>

          {/*Icons*/}
          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />

          <a href="https://myaccount.google.com/?utm_source=OGB&tab=wk&utm_medium=act&pli=1">
            <Avatar url="https://cdn.dribbble.com/users/81809/screenshots/3347540/media/fa6634d657c6b5a35d12b7df3698e3ba.jpg?compress=1&resize=400x300" />
          </a>
        </div>
      </header>

      <form
        className="flex flex-col items-center pt-3 flex-grow w-4/5"
        onSubmit={search}
      >
        <img src="https://i.imgur.com/IZuI2H9.gif" height={207} width={700} />
        <div
          className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full
      border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl"
        >
          <SearchIcon className="h-5 mr-3 text-gray-700" />
          <input
            ref={searchInputRef}
            type="text"
            className="flex-grow focus:outline-none text-lg"
          />
          <MicrophoneIcon className="h-5" />
        </div>
        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4 font-Ubuntu ">
          <button onClick={search} className="btn">
            Google Search
          </button>

          <button className="btn">
            <a href="https://www.google.com/doodles"> I&apos;m Feeling Lucky</a>
          </button>
        </div>

        <div className="flex link justify-center text-sm mt-7 mb-4 pr-1 text-blue-700 items-center md:col-span-2 lg:col-span-1 lg:col-start-2 font-Ubuntu">
          <img src={googleSecurity} className="h-5 px-1 "></img>{" "}
          <a href="https://myaccount.google.com/security-checkup">
            {" "}
            Take a 2 Minute Google Security Checkup.{" "}
          </a>
        </div>
      </form>

      <Footer />
    </div>
  );
}
