"use client";

import Albums from "./Albums";
import Hero from "./Hero";
import Searchbar from "./Searchbar";

function HomePage() {
  return (
    <>
      <div className="bg-secodary flex flex-col justify-center">
          <Searchbar />
          <Hero />
          <Albums/>
      </div>
    </>
  );
}

export default HomePage;
