"use client";
import React from "react";

const Sessions = ({ setIsentered, setAnimated, animated }: any) => {
  const makeSession = () => {
    const session = window.sessionStorage;
    session.setItem("enter", "first");
    setIsentered("first");
    setAnimated(true); // 버튼 클릭 시 애니메이션 시작
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <button
        onClick={makeSession}
        className="px-10 py-2 bg-blue-400 text-white rounded hover:bg-green-500 focus:outline-none zoom-out-rotate"
      >
        버튼
      </button>
    </div>
  );
};

export default Sessions;
