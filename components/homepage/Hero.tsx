"use client";

import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Hero() {
  return (
    <>
      <div className="hidden md:block">
        <div className="flex justify-center">
          <Carousel className="cursor-pointer" showThumbs={false} autoPlay={true} showStatus={false} stopOnHover={true}>
            <Image
              alt="banner"
              src={`/travis-banner.jpg`}
              height={20}
              width={300}
              className="rounded-md"
            />
            <Image
              alt="banner"
              src={`/travis-banner.jpg`}
              height={20}
              width={300}
              className="rounded-md"
            />
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default Hero;
