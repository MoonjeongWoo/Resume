"use client";
import Reactm, { useState } from "react";
import TypewriterText from "../components/Text/Text";
const Sessions = ({ setIsentered, setAnimated, animated }: any) => {
  const [firstTextCompleted, setFirstTextCompleted] = useState(false);

  const makeSession = () => {
    const session = window.sessionStorage;
    session.setItem("enter", "first");
    setIsentered("first");
    setAnimated(true); // 버튼 클릭 시 애니메이션 시작
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col">
          <div className="mb-[450px]">
            <TypewriterText
              text="안녕하세요~! 문정우 입니다"
              onComplete={() => setFirstTextCompleted(true)}
            />
            {firstTextCompleted && (
              <TypewriterText text="이이야아~! 포폴탱이 보쏘!" />
            )}
          </div>
          <div
            className="absolute"
            style={{
              bottom: "50%",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <button
              onClick={makeSession}
              className="px-10 py-2 bg-blue-400 text-white rounded hover:bg-green-500 focus:outline-none zoom-out-rotate"
            >
              버튼
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sessions;
