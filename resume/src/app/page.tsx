import React from "react";
import Imagecomp from "./components/Image/Imagecomp";
import Intro from "./components/Intro/Intro";
export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center">
        <div className="m-10">
          <Imagecomp />
        </div>
        <div className="m-10 w-1/3">
          <Intro></Intro>
        </div>
      </div>
    </main>
  );
}
