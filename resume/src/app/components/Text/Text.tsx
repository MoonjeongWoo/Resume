import React, { useEffect, useState } from "react";

const TypewriterText = ({ text, onComplete }: any) => {
  const [displayedText, setDisplayedText] = useState("");
  const typingSpeed = 100;
  const maxTextLength = text.length;

  useEffect(() => {
    if (displayedText.length < maxTextLength) {
      setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, typingSpeed);
    } else if (onComplete) {
      onComplete(); // 텍스트 애니메이션이 완료되었을 때 호출
    }
  }, [displayedText, text, onComplete]);

  // 텍스트 길이를 일정하게 유지하기 위해 투명 공백 문자 추가
  const invisibleSpace = "\u00A0"; // Non-breaking space
  const remainingSpace = invisibleSpace.repeat(
    maxTextLength - displayedText.length
  );

  return (
    <div className="text-white typewriter-text">
      {displayedText}
      {remainingSpace}
    </div>
  );
};

export default TypewriterText;
