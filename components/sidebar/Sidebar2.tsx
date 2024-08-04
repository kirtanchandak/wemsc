"use client";

import { recentlyPlayed, myPlayist } from "@/data/albums";
import Image from "next/image";
import { IoNotificationsOutline } from "react-icons/io5";
import RecentlyPlayedItem from "../ui/RecentlyPlayedItem";
import { useState, useEffect } from "react";
import Link from "next/link";

function Sidebar2() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 50);
  }, []);

  return (
    <>
      <div className="h-screen bg-primary text-white p-5">
        <div className="flex justify-between">
          <div className="flex gap-2">
            <Link href="#">
              <Image
                src={`/cat.jpg`}
                alt="user"
                width={30}
                height={30}
                className="rounded-full aspect-square"
              />
            </Link>
            <p className="font-semibold mt-1">Kirtan Chandak</p>
          </div>
          <IoNotificationsOutline size={25} className="mt-1 cursor-pointer" />
        </div>
        <div className="mt-6">
          <div className="flex justify-between">
            <h1 className="font-semibold text-lg">Recently Played</h1>
            <p className="text-gray-300">See all</p>
          </div>
          <div className="mt-5">
            <RecentlyPlayedItem
              recentlyPlayed={recentlyPlayed}
              isLoading={isLoading}
            />
          </div>
        </div>
        <div className="mt-8">
          <div className="flex justify-between">
            <h1 className="font-semibold text-lg">My Playlist</h1>
            <p className="text-gray-300">See all</p>
          </div>
          <div className="mt-5">
            <RecentlyPlayedItem
              recentlyPlayed={myPlayist}
              isLoading={isLoading}
            />
          </div>
        </div>
        <div>
          <button className="bg-white text-black mt-5 p-2 rounded-md w-full hover:bg-gray-300 transition-transform">
            Create New Playlist
          </button>
        </div>
      </div>
    </>
  );
}

export default Sidebar2;
