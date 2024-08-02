"use client";

import React from 'react';
import Image from 'next/image';
import { FaStepBackward, FaStepForward, FaPlay, FaVolumeDown, FaVolumeUp } from 'react-icons/fa';
import { IoMicOutline, IoShareSocialOutline  } from "react-icons/io5";

function MusicPlayer() {
  return (
    <>
      {/* Music player for large screens */}
      <div className="fixed bottom-0 left-0 w-full bg-primary text-white p-4 border-t-[0.01px] border-gray-700 hidden md:flex">
        <div className="flex items-center justify-between w-full">
          {/* Song Info */}
          <div className="flex items-center space-x-4">
            <Image src={`/drake2.jpeg`} alt="Album Cover" width={30} height={30} className="rounded" />
            <div>
              <h3 className="text-sm font-semibold">Song Title</h3>
              <p className="text-xs text-gray-400">Artist Name</p>
            </div>
          </div>

          {/* Player Controls and Progress Bar */}
          <div className="flex flex-col items-center space-y-2">
            <div className="flex items-center space-x-4">
              <button className="text-xl hover:text-gray-400">
                <FaStepBackward />
              </button>
              <button className="text-2xl hover:text-gray-400">
                <FaPlay />
              </button>
              <button className="text-xl hover:text-gray-400">
                <FaStepForward />
              </button>
            </div>
            <div className="w-full flex items-center space-x-2">
              <span className="text-xs text-gray-400">0:00</span>
              <input type="range" className="w-[600px]" />
              <span className="text-xs text-gray-400">3:30</span>
            </div>
          </div>

          {/* Volume Control */}
          <div className="flex items-center space-x-2">
            <button className="text-xl hover:text-gray-400">
              <FaVolumeDown />
            </button>
            <input type="range" className="w-24" />
            <div className="flex text-xl gap-3">
              <FaVolumeUp />
              <IoMicOutline />
              <IoShareSocialOutline />
            </div>
          </div>
        </div>
      </div>

      {/* Music player for small screens */}
      <div className="fixed bottom-0 left-0 w-full bg-primary text-white p-4 border-t-[0.01px] border-gray-700 flex md:hidden">
        <div className="flex items-center justify-between w-full">
          {/* Simplified Player Controls and Progress Bar */}
          <div className="flex items-center space-x-4">
            <button className="text-xl hover:text-gray-400">
              <FaStepBackward />
            </button>
            <button className="text-2xl hover:text-gray-400">
              <FaPlay />
            </button>
            <button className="text-xl hover:text-gray-400">
              <FaStepForward />
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-xs text-gray-400">0:00</span>
            <input type="range" className="w-[150px]" />
            <span className="text-xs text-gray-400">3:30</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default MusicPlayer;
