"use client";

import Image from "next/image";
import { StaticImageData } from "next/image";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

interface RecentlyPlayedItem {
  id: number;
  name: string;
  img: string | StaticImageData;
  artist: string;
}

interface RecentlyPlayedItemProps {
  recentlyPlayed: RecentlyPlayedItem[];
  isLoading: boolean; 
}

function RecentlyPlayedItem({ recentlyPlayed, isLoading }: RecentlyPlayedItemProps) {
  if (isLoading) {
    return (
      <div>
        {Array(5) 
          .fill(null)
          .map((_, index) => (
            <div
              key={index}
              className="relative flex items-center mt-3 gap-4 p-2 rounded-md group cursor-pointer"
            >
              <Skeleton height={50} width={50} className="rounded-md red-skeleton" baseColor="#555555" />
              <div className="flex flex-col justify-center flex-1">
                <Skeleton width={100} height={20} className="red-skeleton" baseColor="#555555" />
                <Skeleton width={60} height={15} className="red-skeleton mt-1" baseColor="#555555" />
              </div>
              <Skeleton width={50} height={20} className="red-skeleton ml-auto" baseColor="#555555" />
            </div>
          ))}
      </div>
    );
  }

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
