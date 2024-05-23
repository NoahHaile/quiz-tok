import "@/styles/home/main/choice.css";

export function Choice({answer}) {
    return (
            <div className="answer-box">
                <p className="answer">{answer}</p>
            </div>
        
    );
}