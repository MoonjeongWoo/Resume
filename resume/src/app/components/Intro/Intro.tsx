"use client";
import React, { useState } from "react";
import Button from "../Button/Button";
import useStateStore from "../../zustand/statements";
const Intro = () => {
  const { isClicked, setIsClicked } = useStateStore();
  return (
    <>
      <div className="flex items-center justify-center rounded-md bg-slate-50 h-16">
        <div
          onClick={() => {
            setIsClicked(isClicked + 1);
            console.log("isCLicked", isClicked);
          }}
          className="text-center cursor-pointer"
        >
          안녕하세요 저는 문정우라고 합니다.
        </div>
      </div>
      <div className="mt-[50px]">
        <div className="flex items-center justify-center  h-16">
          <Button></Button>
        </div>
      </div>
    </>
  );
};

export default Intro;
