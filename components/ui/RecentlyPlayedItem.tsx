"use client";

import Image from "next/image";
import { StaticImageData } from "next/image";
import { PlayButton } from "./PlayButton";

interface RecentlyPlayedItem {
  id: number;
  name: string;
  img: string | StaticImageData;
  artist: string;
}

interface RecentlyPlayedItemProps {
  recentlyPlayed: RecentlyPlayedItem[];
}

function RecentlyPlayedItem({ recentlyPlayed }: RecentlyPlayedItemProps) {
  return (
    <div>
      {recentlyPlayed.map((music) => (
        <div 
          key={music.id} 
          className="relative flex items-center mt-3 gap-4 hover:bg-neutral-500/10 transition p-2 rounded-md group cursor-pointer"
        >
          <Image
            alt="music"
            src={music.img}
            width={50}
            height={50}
            className="rounded-md object-contain"
          />
          <div className="flex flex-col justify-center flex-1">
            <p className="font-bold">{music.name}</p>
            <p className="text-gray-300 text-sm">{music.artist}</p>
          </div>
          <p className="text-sm text-gray-300 ml-auto">3 min ago</p>
        </div>
      ))}
    </div>
  );
}

export default RecentlyPlayedItem;
