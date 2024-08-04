"use client";
import Image from "next/image";
import { useState } from "react";
import { LuLibrary } from "react-icons/lu";
import SidebarItem from "../ui/SidebarItem";
import { libraryItems, menuItems } from "@/data/sideebarEle";
import Link from "next/link";

function Sidebar1() {
  const [activeItem, setActiveItem] = useState("Home");

  const handleItemClick = (name: string) => {
    setActiveItem(name);
  };

  return (
    <>
      <div className="bg-primary text-white h-screen p-5">
        <div className="flex justify-between">
          <Link href="#">
          <Image src={`/logo.svg`} alt="logo" width={35} height={35} />
          </Link>
          <span className="mt-1 cursor-pointer">
            <LuLibrary size={25} />
          </span>
        </div>
        <div className="mt-10">
          <p className="text-gray-300 text-sm font-poppins">FEATURES</p>
          <div className="mt-4">
            <SidebarItem menuItems={menuItems} handleItemClick={handleItemClick} activeItem={activeItem} />
          </div>
          <p className="text-gray-300 text-sm font-poppins mt-10">LIBRARY</p>
          <div className="mt-8">
            <SidebarItem menuItems={libraryItems} handleItemClick={handleItemClick} activeItem={activeItem} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar1;
