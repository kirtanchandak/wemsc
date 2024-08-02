"use client";

import Hero from "./Hero";
import Searchbar from "./Searchbar";
import { useEffect, useState } from "react";

function HomePage() {
  return (
    <>
      <div className="bg-secodary flex flex-col justify-center">
          <Searchbar />
          <Hero />
      </div>
    </>
  );
}

export default HomePage;
