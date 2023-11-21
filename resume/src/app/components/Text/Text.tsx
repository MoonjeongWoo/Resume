import React, { useEffect, useState } from "react";

const TypewriterText = ({ text, onComplete }: any) => {
  const [displayedText, setDisplayedText] = useState("");
  const typingSpeed = 100;

  useEffect(() => {
    if (text.length > displayedText.length) {
      setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, typingSpeed);
    } else if (onComplete) {
      onComplete(); // 텍스트 애니메이션이 완료되었을 때 호출
    }
  }, [displayedText, text, onComplete]);

  return <div className="text-white ">{displayedText}</div>;
};

export default TypewriterText;
