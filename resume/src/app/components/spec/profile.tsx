"use client";
import React, { useState } from "react";

const Profile = () => {
  const [isupted, setIsUpted] = useState(false);
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
          <div className="">안녕하세요</div>
        ) : (
          <div className="">안녕하시와요!</div>
        )}
      </div>
    </>
  );
};

export default Profile;
