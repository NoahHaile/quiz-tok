
import { Timer } from "@/components/timer/timer";
import React from "react";

import "@/styles/home/time/time.css"

export default function Time({question}){
    return (
        <div className="timer-container">
            <Timer time={question.timer}/>{/*timer*/}
        </div>
    )
}

//Complexity: 6/10
//Importance: Gamifying
//Value: 2.75/10