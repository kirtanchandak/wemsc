"use client";

import { albums } from "@/data/data";
import Image from "next/image";
import { PlayButton } from "../ui/PlayButton";

function Albums() {
  return (
    <>
      <div className="text-white md:mx-[290px] mx-8 mt-8">
        <h1 className="font-semibold text-3xl">Hello, Kirtan</h1>
        <div className="md:flex flex-wrap gap-12 mt-8">
          {albums.map((album, index) => (
            <div
              key={index}
              className="relative mt-12 md:mt-0 hover:bg-neutral-500/10 transition p-3 cursor-pointer group rounded-md"
            >
              <Image
                alt="album"
                className="rounded-md"
                src={album.img}
                height={250}
                width={250}
              />
              <div className="mt-2">
                <p className="font-bold text-xl">{album.name}</p>
                <p className="text-gray-300">By - {album.artist}</p>
                <div className="absolute bottom-24 right-5">
                  <PlayButton />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Albums;
