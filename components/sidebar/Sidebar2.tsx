"use client";

import { recentelyListened } from "@/data/data";
import Image from "next/image";
import { IoNotificationsOutline } from "react-icons/io5";

function Sidebar2() {
  return (
    <div className="h-screen bg-primary text-white p-5">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <Image
            src={`/cat.jpg`}
            alt="user"
            width={30}
            height={30}
            className="rounded-full aspect-square"
          />
          <p className="font-semibold mt-1">Kirtan Chandak</p>
        </div>
        <IoNotificationsOutline size={25} className="mt-1" />
      </div>
      <div className="mt-8">
        <div className="flex justify-between">
          <h1 className="font-semibold text-lg">Recently Played</h1>
          <p className="text-gray-300">See all</p>
        </div>
        <div className="mt-5">
          {recentelyListened.map((music) => (
            <div key={music.id} className="flex items-center mt-3 gap-4">
              <Image
                alt="music"
                src={music.img}
                width={50}
                height={50}
                className="rounded-md object-contain"
              />
              <div className="flex flex-col justify-center">
                <p className="font-bold">{music.name}</p>
                <p className="text-gray-300 text-sm">{music.artist}</p>
              </div>
              <p className="text-sm text-gray-300 ml-auto">3 min ago</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8">
        <div className="flex justify-between">
          <h1 className="font-semibold text-lg">My Playlist</h1>
          <p className="text-gray-300">See all</p>
        </div>
        <div className="mt-5">
          {recentelyListened.map((music) => (
            <div key={music.id} className="flex items-center mt-3 gap-4">
              <Image
                alt="music"
                src={music.img}
                width={50}
                height={50}
                className="rounded-md object-contain"
              />
              <div className="flex flex-col justify-center">
                <p className="font-bold">{music.name}</p>
                <p className="text-gray-300 text-sm">{music.artist}</p>
              </div>
              <p className="text-sm text-gray-300 ml-auto">3 min ago</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar2;
