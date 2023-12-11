"use client";
import React, { useState } from "react";
import Button from "../Button/Button";
import useStateStore from "../../zustand/statements";
const Intro = () => {
  const { isClicked, setIsClicked } = useStateStore();

  const messages = [
    "안녕하세요 저는 문정우라고 합니다.",
    "지금 부터 저에 대해서 소개를 해 드릴려 합니다.",
    "버튼을 눌러주세용",
    "싫으면 나가시던가요",
    "Next",
    "Go",
  ];

  const lastindex = messages.indexOf("Next");

  const handleClick = () => {
    if (isClicked === lastindex) {
      const outok = window.confirm("진짜로 나가실거에용...???");
      if (outok) {
        window.close();
      }
    }
  };
  return (
    <>
      <div className="flex items-center justify-center rounded-md bg-slate-50 h-16">
        <div
          onClick={() => {
            setIsClicked((prev) =>
              prev < messages.length - 1 ? prev + 1 : prev
            );
          }}
          className="text-center cursor-pointer"
        >
          <p>{messages[isClicked]}</p>
        </div>
      </div>
      <div className="mt-[50px]">
        <div className="flex items-center justify-center  h-16">
          {isClicked === lastindex ? (
            <>
              <div className="flex gap-10">
                <button
                  onClick={(outok) => {
                    if (outok) {
                      handleClick();
                    }
                  }}
                >
                  EXIT
                </button>
                <Button messages={messages} />
              </div>
            </>
          ) : (
            <Button messages={messages} />
          )}
        </div>
      </div>
    </>
  );
};

export default Intro;
