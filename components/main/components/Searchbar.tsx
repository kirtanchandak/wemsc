"use client";

import { PiGreaterThanBold, PiLessThanBold } from "react-icons/pi";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import {
  AiOutlineHome,
  AiOutlineHeart,
  AiOutlineFolder,
} from "react-icons/ai";

function Searchbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="hidden lg:flex justify-center md:p-8 space-x-16">
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

      <div className="p-5 lg:hidden">
        <div className="w-full mb-4 flex items-center justify-between">
          <div className="flex lg:hidden gap-x-2 items-center">
            <button
              className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition"
              onClick={() => setOpen(!open)}
            >
              <GiHamburgerMenu />
            </button>
            <button className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
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

      {/* Sidebar */}
      <div
        className={`fixed z-10 top-0 left-0 h-full w-64 bg-primary text-white transition-transform transform ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4">
          <h2 className="text-xl font-semibold">Menu</h2>
          <button onClick={() => setOpen(false)}>
            <AiOutlineClose size={24} />
          </button>
        </div>
        <ul className="p-4">
          <li className="py-2 px-4 hover:bg-gray-700 rounded-md flex gap-3">
            <AiOutlineHome size={20} />
            Home
          </li>
          <li className="py-2 px-4 hover:bg-gray-700 rounded-md flex gap-3">
          <CiSearch size={20} /> Search 
          </li>
          <li className="py-2 px-4 hover:bg-gray-700 rounded-md flex gap-3">
          <AiOutlineFolder size={20} /> Your Library 
          </li>
          <li className="py-2 px-4 hover:bg-gray-700 rounded-md flex gap-3">
            <AiOutlineHeart size={20}/> Liked Songs
          </li>
        </ul>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black opacity-50"
          onClick={() => setOpen(false)}
        ></div>
      )}
    </>
  );
}

export default Searchbar;
