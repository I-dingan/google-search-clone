import Image from "next/image";
import React, { useRef } from "react";
import { useRouter } from "next/router";
import { MicrophoneIcon, XIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

function Header() {
  const router = useRouter();
  const searchInputRef = useRef(null);
  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term) return;
    router.push(`/search?term=${term}`);
  };
  return (
    <header className="sticky top-0 bg-white ">
        <div className="flex w-full p-6 items-center">
        <Image
        src="https://www.google.com/logos/doodles/2021/get-vaccinated-wear-a-mask-save-lives-august-31-copy-6753651837109312-2xa.gif"
        className="cursor-pointer"
        alt="logo"
        height={70}
        width={210}
        onClick={() => router.push("/")}
      />
      <form
        className="flex border border-gray-200 rounded-full shadow-lg max-w-3xl
        items-center px-6 py-3 ml-10 mr-5 flex-grow"
      >
        <input
          ref={searchInputRef}
          className="flex-grow w-full focus:outline-none

            "
          type="text"
        />
        <XIcon
          className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100
            hover:scale-125"
          onClick={() => {
            searchInputRef.current.value = "";
          }}
        />
        <MicrophoneIcon
          className="h-6 mr-3 hidden sm:inline-flex text-blue-500
            cursor-pointer border-l-2 pl-4 border-gray-300"
        />
        <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex" />
        <button hidden type="submit" onClick={search}>
          Search
        </button>
      </form>
      <Avatar className="ml-auto" url="data:image/jpeg;base64,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" />

        </div>
        {/* headerOptions */}
      <HeaderOptions/>
    </header>
  );
}

export default Header;
