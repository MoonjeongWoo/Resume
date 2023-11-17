"use client"
import React from "react";

const Sessions = () => {
    const makeSession = () => {
        const session = window.sessionStorage;
        session.setItem("enter", "first");
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <button 
                onClick={makeSession} 
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
            >
                버튼
            </button>
        </div>
    );
};

export default Sessions;
