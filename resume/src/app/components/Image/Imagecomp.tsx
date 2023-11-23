"use client";
import React from "react";
import Image from "next/image";
import mypic from "../../../../public/mypic.jpg";

const ImageComp = () => {
  return (
    <div className="mt-[50px]">
      <Image src={mypic} alt="Mypic" width={200} className="rounded-full" />
    </div>
  );
};

export default ImageComp;
