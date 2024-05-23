
import React from "react";
import { NavBackButton } from "@/components/nav/navBackButton";
import { QuizTitle } from "@/components/nav/quizTitle";
import { NavSkipButton } from "@/components/nav/navSkipButton";

import "@/styles/home/nav/nav.css";

export default function Header({quizObject}){
    return (
        <div className="header-container">
            <div className="title-container">
                <QuizTitle title={quizObject?.title}/>{/*title*/}
            </div>
            <nav className="navigation-container">
                <NavBackButton />{/*back*/}
                <NavSkipButton />{/*skip|next*/}
            </nav>
        </div>
    )
}

//Complexity: 4/10
//Importance: Supportive/Informative
//Value: 0.5/10
