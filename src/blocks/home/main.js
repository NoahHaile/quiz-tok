
import React from "react";
import { OptionalImage } from "@/components/main/optionalImage";
import { Question } from "@/components/main/question";
import { Choice } from "@/components/main/choice";

import "@/styles/home/main/main.css"

export default function Main({question}){
    return(
            <div className="question-answer-container">
                { question.optionalImage ? <OptionalImage image={question.optionalImage}/> : ""}
                <Question question={question?.question}/>
                <div className="answers-container">
                    {question?.answers?.map((answer, index) => (
                        <Choice key={index} answer={answer} />
                    ))}
                </div>
                
            </div>

    )
}

//Complexity: 7.5/10
//Importance: Main
//Value: 5.25/10




