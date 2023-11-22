import React, { useState, useEffect } from "react";
import TypewriterText from "../components/Text/Text";

const Sessions = ({ setIsentered, setAnimated, animated }: any) => {
  const [firstTextCompleted, setFirstTextCompleted] = useState(false);
  const [secondTextCompleted, setSecondTextCompleted] = useState(false);
  const [showBounceText, setShowBounceText] = useState(false);
  const [fadeInCompleted, setFadeInCompleted] = useState(false);
  const [ishovered, setIshovered] = useState(false);

  const makeSession = () => {
    const session = window.sessionStorage;
    session.setItem("enter", "first");
    setIsentered("first");
    setAnimated(true); // 버튼 클릭 시 애니메이션 시작
  };

  useEffect(() => {
    if (showBounceText && secondTextCompleted) {
      // fadeIn 효과가 끝난 후에 bounce 효과 시작
      setTimeout(() => {
        setFadeInCompleted(true);
      }, 1000); // fadeIn 효과의 지속시간과 일치시키세요 (여기서는 1초)
    }
  }, [showBounceText, secondTextCompleted]);

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col">
          <div className="mb-[450px] ml-[40px]">
            <TypewriterText
              text="안녕하세요~! 문정우 입니다"
              onComplete={() => setFirstTextCompleted(true)}
            />
            {firstTextCompleted && (
              <TypewriterText
                text="이이야아~! 포폴탱이 보쏘!"
                onComplete={() => {
                  setSecondTextCompleted(true);
                  setShowBounceText(true);
                }}
              />
            )}
            {showBounceText && secondTextCompleted && (
              <div
                className={
                  fadeInCompleted
                    ? "bounce text-white mt-[50px]"
                    : "fade-in text-white mt-[50px]"
                }
              >
                밑에 버튼을 클릭해보세요! 😊
                <div>
                  <div className="ml-[60px]">이 새끼요</div>
                  <div className="ml-[80px]">▼</div>
                </div>
              </div>
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
              onMouseEnter={() => setIshovered(true)}
              onMouseLeave={() => setIshovered(false)}
              className={
                ishovered
                  ? "px-10 py-2 bg-blue-400 text-white rounded hover:bg-green-500 focus:outline-none zoom-out-rotate"
                  : "px-10 py-2 bg-blue-400 text-white rounded hover:bg-green-500 focus:outline-none bounce"
              }
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
