import "@/styles/home/nav/quizTitle.css";

export function QuizTitle({title}) {
    return(
        <div>
            {title ? <h1>{title}</h1> : <h1>Good Luck</h1>}
        </div>
    )
}