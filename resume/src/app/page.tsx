import React from "react";
import Imagecomp from "./components/Image/Imagecomp";
export default function Home() {
  return (
    <main>
      <div>
        <div className="flex items-center justify-center">
          <div className="flex flex-col">
            <Imagecomp />
          </div>
        </div>
      </div>
    </main>
  );
}
