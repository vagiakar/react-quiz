import Intro from "./Intro.js";
import Quiz from "./Quiz.js";
import QuizEnd from "./Quizend.js";
import { useGlobalContext } from "./AppProvider.js";

function App() {
  const { isRestart, isQuizEnd } = useGlobalContext();
  if (isRestart) {
    return (
      <section className="card quiz-intro">
        <h1>Trivia Quiz</h1>
        <Intro />
      </section>
    );
  } else if (isQuizEnd) {
    return <QuizEnd />;
  }
  return <Quiz />;
}

export default App;
