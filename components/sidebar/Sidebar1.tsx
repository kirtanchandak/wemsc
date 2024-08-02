"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineHome, AiFillHome, AiOutlineCompass, AiFillCompass, AiOutlineHeart, AiFillHeart, AiOutlineFolder, AiFillFolder, AiOutlineFile, AiFillFile } from "react-icons/ai";
import { LuLibrary } from "react-icons/lu";

function Sidebar1() {
  const [activeItem, setActiveItem] = useState("Home");

  const menuItems = [
    { name: "Home", icon: <AiOutlineHome size={25} />, activeIcon: <AiFillHome size={25} /> },
    { name: "Discover", icon: <AiOutlineCompass size={25} />, activeIcon: <AiFillCompass size={25} /> },
    { name: "Collections", icon: <AiOutlineFolder size={25} />, activeIcon: <AiFillFolder size={25} /> },
  ];

  const libraryItems = [
    { name: "Downloads", icon: <AiOutlineFile size={25} />, activeIcon: <AiFillFile size={25} /> },
    { name: "Favourites", icon: <AiOutlineHeart size={25} />, activeIcon: <AiFillHeart size={25} /> },
    { name: "Local Files", icon: <AiOutlineFile size={25} />, activeIcon: <AiFillFile size={25} /> },
  ];

  const handleItemClick = (name: string) => {
    setActiveItem(name);
  };

  return (
    <div className="bg-primary w-2/12 text-white h-screen p-5">
      <div className="flex justify-between">
        <Image src={`/logo.svg`} alt="logo" width={35} height={35} />
        <span className="mt-2"><LuLibrary size={25}/></span>
      </div>
      <div className="mt-10">
        <p className="text-gray-300 text-sm font-poppins">FEATURES</p>
        <div className="mt-4">
          {menuItems.map((item, index) => (
            <Link href="#" key={index} onClick={() => handleItemClick(item.name)} className={`flex gap-5 mt-3 ${activeItem === item.name ? 'text-blue-500' : ''}`}>
              {activeItem === item.name ? item.activeIcon : item.icon}
              <p className="font-semibold text-lg">{item.name}</p>
            </Link>
          ))}
        </div>
        <p className="text-gray-300 text-sm font-poppins mt-10">LIBRARY</p>
        <div className="mt-8">
          {libraryItems.map((item, index) => (
            <Link href="#" key={index} onClick={() => handleItemClick(item.name)} className={`flex gap-5 mt-3 ${activeItem === item.name ? 'text-blue-500' : ''}`}>
              {activeItem === item.name ? item.activeIcon : item.icon}
              <p className="font-semibold text-lg">{item.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar1;
