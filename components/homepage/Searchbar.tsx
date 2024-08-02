"use client";

import { PiGreaterThanBold } from "react-icons/pi";
import { PiLessThanBold } from "react-icons/pi";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";

function Searchbar() {
  return (
    <>
      {/* Search bar for larger screens */}
      <div className="hidden md:flex justify-center md:p-8 space-x-16">
        <div className="flex gap-6 mt-3">
          <PiLessThanBold size={20} color="white" />
          <PiGreaterThanBold size={20} color="white" />
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search for artists, songs or albums"
            className="md:w-[650px] w-52 p-2 pl-10 bg-white rounded-full outline-none"
          />
          <CiSearch
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            size={20}
          />
        </div>
        <div className="mt-2">
          <HiOutlineDotsHorizontal size={25} color="white" />
        </div>
      </div>

      {/* Hide the search bar on small screens */}
      <div className="hidden md:hidden justify-between p-4">
        <PiLessThanBold size={20} color="white" />
        <div className="relative flex-grow mx-2">
          <input
            type="text"
            placeholder="Search"
            className="w-full p-2 pl-10 bg-white rounded-full outline-none"
          />
          <CiSearch
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            size={20}
          />
        </div>
        <HiOutlineDotsHorizontal size={25} color="white" />
      </div>

      {/* small screens */}

      <div>
        <div className=" w-full mb-4 flex items-center justify-between ">
          <div className="hidden md:flex gap-x-2 items-center">
            <button className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition">
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="0"
                viewBox="0 0 15 15"
                className="text-white"
                height="35"
                width="35"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.81809 4.18179C8.99383 4.35753 8.99383 4.64245 8.81809 4.81819L6.13629 7.49999L8.81809 10.1818C8.99383 10.3575 8.99383 10.6424 8.81809 10.8182C8.64236 10.9939 8.35743 10.9939 8.1817 10.8182L5.1817 7.81819C5.09731 7.73379 5.0499 7.61933 5.0499 7.49999C5.0499 7.38064 5.09731 7.26618 5.1817 7.18179L8.1817 4.18179C8.35743 4.00605 8.64236 4.00605 8.81809 4.18179Z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
            <button className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition">
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="0"
                viewBox="0 0 15 15"
                className="text-white"
                height="35"
                width="35"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.18194 4.18185C6.35767 4.00611 6.6426 4.00611 6.81833 4.18185L9.81833 7.18185C9.90272 7.26624 9.95013 7.3807 9.95013 7.50005C9.95013 7.6194 9.90272 7.73386 9.81833 7.81825L6.81833 10.8182C6.6426 10.994 6.35767 10.994 6.18194 10.8182C6.0062 10.6425 6.0062 10.3576 6.18194 10.1819L8.86374 7.50005L6.18194 4.81825C6.0062 4.64251 6.0062 4.35759 6.18194 4.18185Z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
          </div>
          <div className="flex md:hidden gap-x-2 items-center p-5">
            <button className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 20 20"
                aria-hidden="true"
                className="text-black"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
              </svg>
            </button>
            <button className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                className="text-black"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
              </svg>
            </button>
          </div>
          <div className="flex justify-between items-center gap-x-4">
            <div>
              <button
                type="button"
                className="w-full rounded-full border border-transparent px-3 py-3 disabled:cursor-not-allowed disabled:opacity-50 hover:opacity-75 transition bg-transparent text-neutral-300 font-medium"
              >
                Sign Up
              </button>
            </div>
            <div>
              <button
                type="button"
                className="w-full rounded-full border border-transparent disabled:cursor-not-allowed disabled:opacity-50 text-black font-bold hover:opacity-75 transition bg-white px-6 py-2"
              >
                Log in
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Searchbar;
