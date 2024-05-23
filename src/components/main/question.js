import "@/styles/home/main/question.css";

export function Question({question}) {
    return (
        <div className="question-container">
            {question ? <p className="question">{question}</p> : <p className="question">...</p>}
        </div>
    );
}