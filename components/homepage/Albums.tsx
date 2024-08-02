"use client";

import { albums } from "@/data/data";
import Image from "next/image";
import { PlayButton } from "../ui/PlayButton";

function Albums() {
  return (
    <>
      <div className="text-white lg:mx-[290px] md:px-12 px-6 mt-8 pb-28">
        <div className="">
          <h1 className="font-semibold text-3xl px-3">Hello, Kirtan</h1>
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
        </div>
        <div className="mt-12">
          <h1 className="font-semibold text-3xl px-3">
            New releases just for you
          </h1>
          <div className="flex">
            <div className="grid md:grid-cols-3 grid-cols-1 md:gap-12 mt-8">
            {albums.map((album, index) => (
              <div
                key={index}
                className="relative hover:bg-neutral-500/10 transition p-3 cursor-pointer group rounded-md"
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
        </div>
        <div className="mt-12">
          <iframe
            className="rounded-md"
            src="https://open.spotify.com/embed/playlist/37i9dQZF1E4qQ00I1Jm1ay?utm_source=generator"
            width="100%"
            height="352"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default Albums;
