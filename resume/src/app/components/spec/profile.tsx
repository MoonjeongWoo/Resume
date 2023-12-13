"use client";
import useStateStore from "@/app/zustand/statements";
import React, { useState } from "react";

const Profile = () => {
  const { isupted, setIsUpted } = useStateStore();
  return (
    <>
      <div
        onClick={() => {
          setIsUpted(!isupted);
          console.log("isupted", isupted);
        }}
        className="flex bg-white rounded-xl h-20 text-center items-center justify-center cursor-pointer"
      >
        {isupted ? (
          <div className=""></div>
        ) : (
          <div className="">안녕하시와요!</div>
        )}
      </div>
    </>
  );
};

export default Profile;
