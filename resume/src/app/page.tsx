// Home component
'use client';
import { useState } from "react";
import Navbar from "./navbar/page";
import IsFirstCome from "./isFirst/page";

export default function Home() {
    const [animate, setAnimate] = useState(false);
    const [showNewScreen, setShowNewScreen] = useState(false);

    const handleAnimationStart = () => {
        setAnimate(true);
    };

    const handleAnimationEnd = () => {
        setAnimate(false);
        setShowNewScreen(true);
    };

    const mainStyle = animate ? { animation: 'sinkhole 1s forwards' } : {};

    return (
        <main style={mainStyle}>
            <Navbar />
            {!showNewScreen && <IsFirstCome onButtonClick={handleAnimationEnd} onAnimationStart={handleAnimationStart} />}
            {showNewScreen && (
                <div>New Screen Content Here</div>
            )}

            <style>
                {`
                @keyframes sinkhole {
                    0% {
                        transform: scale(1);
                        opacity: 1;
                    }
                    100% {
                        transform: scale(0) translate(-50%, -50%);
                        opacity: 0;
                    }
                }
                `}
            </style>
        </main>
    );
}
