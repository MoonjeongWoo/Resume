'use client';

import { useState } from "react";

const IsFirstCome = ({ onButtonClick =() => {}, onAnimationStart = () => {} }) => {
    const [isAnimating, setIsAnimating] = useState(false);

    const handleClick = () => {
        setIsAnimating(!isAnimating)
        console.log("isAnimating",isAnimating)
        onAnimationStart(); // Call when animation starts
        setTimeout(() => {
            onButtonClick(); // Call when animation ends
        }, 1000); // Duration of the animation
    };

    const buttonStyle = isAnimating ? {
        animation: 'sinkhole 1s forwards',
        position: 'absolute' as const, // Type assertion
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 2
    } : {
        position: 'absolute' as const, // Type assertion
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 2
    };
    return (
        <div>
            <div>처음 이신가요?</div>
            <div>처음이시면 아래의 버튼을 눌러주세요</div>
            <button style={buttonStyle} onClick={handleClick}>입장쓰</button>

            <style>
                {`
                @keyframes sinkhole {
                    0% {
                        transform: scale(1) translate(-50%, -50%);
                        opacity: 1;
                    }
                    100% {
                        transform: scale(0) translate(-50%, -50%);
                        opacity: 0;
                    }
                }
                `}
            </style>
        </div>
    );
}

export default IsFirstCome;
