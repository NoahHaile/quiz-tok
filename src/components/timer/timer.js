'use client'
import React, { useEffect, useState } from "react";
import "@/styles/home/time/timer.css";

export function Timer({time}) {
    const [remainingTime, setRemainingTime] = useState(parseInt(time));

    useEffect(() => {
        const timerInterval = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 0.01);
        }, 10);

        return () => clearInterval(timerInterval);
    }, []);

    const percentage = (remainingTime / time) * 100; 
    const barShade = Math.round(255 * (percentage / 100)); // Adjusting the green color value
    const color = `rgb(${255 - barShade}, ${barShade / 4}, 0)`; // Dynamic color based on percentage

    return (
        <div className="timer">
            <div className="bar" style={{ width: `${percentage}%`, backgroundColor: `${color}` }}></div>
        </div>
    );
}