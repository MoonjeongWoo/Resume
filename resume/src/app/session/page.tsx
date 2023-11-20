"use client";
import React from "react";

const Sessions = ({ setIsentered, setAnimated }: any) => {
  const makeSession = () => {
    const session = window.sessionStorage;
    session.setItem("enter", "first");
    setIsentered("first");
    setAnimated(false);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <button
        onClick={makeSession}
        className="px-10 py-2 bg-blue-400 text-white rounded hover:bg-green-500 focus:outline-none rotate-in"
      >
        버튼
      </button>
    </div>
  );
};

export default Sessions;
