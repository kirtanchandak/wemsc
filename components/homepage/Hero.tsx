"use client";

import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Hero() {
  return (
    <>
      <div className="hidden lg:block">
        <div className="flex justify-center">
            <Image
              alt="banner"
              src={`/travis-banner.jpg`}
              className="rounded-md"
              width={800}
             height={200}
            />
        </div>
      </div>
    </>
  );
}

export default Hero;
