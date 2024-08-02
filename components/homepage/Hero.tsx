"use client";

import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Hero() {
  return (
    <>
      <div className="hidden md:block mx-[290px] h-screen">
        <div className="flex justify-center">
          <Carousel autoPlay={true} showStatus={false} stopOnHover={true}>
            <Image
              alt="banner"
              src={`/travis-banner.jpg`}
              height={20}
              width={1000}
              className="rounded-md max-h-[400px]"
            />
            <Image
              alt="banner"
              src={`/travis-banner.jpg`}
              height={20}
              width={1000}
              className="rounded-md max-h-[400px]"
            />
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default Hero;
