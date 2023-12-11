"use client";
import React from "react";
import Imagecomp from "./components/Image/Imagecomp";
import Intro from "./components/Intro/Intro";
import useStateStore from "./zustand/statements";
import Aboutme from "./aboutme/page";
export default function Home() {
  const { isClicked } = useStateStore();
  console.log("isClicked", isClicked);
  return (
    <main>
      <div className="flex flex-col items-center justify-center">
        <div className="m-10">
          <Imagecomp />
        </div>
        <div className="m-10 w-1/3">
          {isClicked > 4 ? <Aboutme></Aboutme> : <Intro></Intro>}
        </div>
      </div>
    </main>
  );
}
