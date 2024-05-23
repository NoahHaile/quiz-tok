import Main from "@/blocks/home/main";
import Header from "@/blocks/home/nav";
import Stamp from "@/blocks/home/stamp";
import Time from "@/blocks/home/time";

import "@/styles/home/homePage.css";

const sampleQuizObject = {
  title: "Random Quiz",
  timer: "0:20",
  questions:[
    {
      question: "Is this working? I hope this wont cause problems.",
      answers: [
        "AAAA",
        "BBBB",
        "CCCC"
      ],
      timer: 15
    }
  ]
}

export default function Home() {

  return (
    <div className="page-container">
      <div className="home-container">
          <header className="header">
              <Header quizObject={sampleQuizObject}/>
          </header>
          <div className="timer">
              <Time question={sampleQuizObject?.questions[0]}/>
          </div>
          <main className="main">
              <Main question={sampleQuizObject?.questions[0]}/>
          </main>
          <footer className="footer">
              <Stamp/>
          </footer>

      </div>
    </div>
);
}
