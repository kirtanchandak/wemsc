"use client";

import Image from "next/image";

function Hero() {
  return (
    <>
      <div className="hidden md:px-12 px-6 lg:flex justify-center">
            <Image
              alt="banner"
              src={`/travis-banner.jpg`}
              className="rounded-md"
              width={800}
             height={200}
            />
        </div>
    </>
  );
}

export default Hero;
