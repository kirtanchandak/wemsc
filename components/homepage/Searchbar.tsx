"use client";

import { PiGreaterThanBold } from "react-icons/pi";
import { PiLessThanBold } from "react-icons/pi";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";

function Searchbar() {
  return (
    <>
      <div className="flex p-8 justify-between">
        <div className="flex gap-6 mt-3">
          <PiLessThanBold size={20} color="white" />
          <PiGreaterThanBold size={20} color="white" />
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search for artists, songs or albums"
            className="w-[650px] p-2 pl-10 bg-white rounded-full outline-none"
          />
          <CiSearch
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            size={20}
          />
        </div>
        <div className="mt-3">
          <BiDotsVerticalRounded size={25} color="white" />
        </div>
      </div>
    </>
  );
}

export default Searchbar;
