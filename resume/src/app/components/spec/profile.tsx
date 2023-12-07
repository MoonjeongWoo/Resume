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
          <div className="">제 신상 정보에오</div>
        )}
      </div>
      <div>
        {isupted ? (
          <>
            <div>여기는 찐으로 내 신상 정보를 보여주는 곳</div>
          </>
        ) : null}
      </div>
    </>
  );
};

export default Profile;
