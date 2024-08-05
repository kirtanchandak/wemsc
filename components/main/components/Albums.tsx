"use client";

import { albums, newReleases } from "@/data/albums";
import { useState, useEffect } from "react";
import SongItem from "../../ui/SongItem";

function Albums() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 50); 
  }, []);

  return (
    <>
      <div className="text-white md:px-12 px-6 mt-8 pb-28">
        <div className="">
          <h1 className="font-semibold text-3xl px-3 md:text-left text-center">Hello, Kirtan</h1>
          <div>
            <SongItem albums={albums} isLoading={isLoading}/>
          </div>
        </div>
        <div className="mt-12">
          <h1 className="font-semibold text-3xl px-3 md:text-left text-center">
            New releases just for you
          </h1>
          <SongItem albums={newReleases} isLoading={isLoading}/>
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
