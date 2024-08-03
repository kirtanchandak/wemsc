"use client";

import Albums from "./components/Albums";
import Hero from "./components/Hero";
import Searchbar from "./components/Searchbar";

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
