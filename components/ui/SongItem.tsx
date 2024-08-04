"use client";
import Image from "next/image";
import { PlayButton } from "../ui/PlayButton";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
import { SongItemProps } from "@/types/types";

function SongItem({ albums, isLoading }: SongItemProps) {
  if (isLoading) {
    return (
      <div className="flex">
        <div className="grid md:grid-cols-3 grid-cols-1 md:gap-12 mt-3">
          {Array(3) 
            .fill(null)
            .map((_, index) => (
              <div
                key={index}
                className="relative md:mt-0 p-3 cursor-pointer group rounded-md"
              >
                <Skeleton height={250} width={250} className="rounded-md" baseColor="#555555" />
                <div className="absolute bottom-24 right-5">
                  <Skeleton circle height={50} width={50} baseColor="##555555" />
                </div>
                <div className="mt-2">
                  <Skeleton width={150} baseColor="#555555" />
                  <Skeleton width={100} baseColor="#555555" />
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex">
      <div className="grid md:grid-cols-3 grid-cols-1 md:gap-12 mt-3">
        {albums.map((album, index) => (
          <div
            key={index}
            className="relative md:mt-0 hover:bg-neutral-500/10 transition p-3 cursor-pointer group rounded-md"
          >
            <Image
              alt="album"
              className="rounded-md"
              src={album.img}
              height={250}
              width={250}
            />
            <div className="absolute bottom-24 right-5">
              <PlayButton />
            </div>
            <div className="mt-2">
              <p className="font-bold text-xl">{album.name}</p>
              <p className="text-gray-300">By - {album.artist}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SongItem;
