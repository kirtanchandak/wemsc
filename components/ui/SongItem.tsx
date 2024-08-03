"use client"
import Image, { StaticImageData } from "next/image"
import { PlayButton } from "../ui/PlayButton";

interface Album {
    id: number,
    name: string,
    img: string | StaticImageData;
    artist: string
}

interface SongItemProps {
    albums: Album[]
}

function SongItem({ albums }: SongItemProps) {
  return (
    <>
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
    </>
  )
}

export default SongItem
