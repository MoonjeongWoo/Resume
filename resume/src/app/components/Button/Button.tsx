"use client";
import React, { useState } from "react";
import useStateStore from "@/app/zustand/statements";
const Button = () => {
  const { isClicked, setIsClicked } = useStateStore();
  return (
    <div>
      <button
        onClick={() => {
          setIsClicked(isClicked + 1);
          console.log("isClicked", isClicked);
        }}
        className="bg-gradient-to-r from-purple-400 to-pink-500 text-white font-bold py-2 px-4 rounded hover:from-pink-500 hover:to-yellow-500"
      >
        Next
      </button>
    </div>
  );
};

export default Button;
