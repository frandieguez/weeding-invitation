import { useEffect, useState } from "react";
import { invitation } from "./config.js";
import Header from "./components/Header.jsx";
import Intro from "./components/Intro.jsx";
import Question from "./components/Question.jsx";
import Verdict from "./components/Verdict.jsx";

// step: -1 = intro, 0..n-1 = preguntas, n = veredicto
export default function App() {
  const [step, setStep] = useState(-1);
  const [answers, setAnswers] = useState([]);
  const total = invitation.questions.length;

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [step]);

  const restart = () => {
    setAnswers([]);
    setStep(-1);
  };

  const answer = (option) => {
    setAnswers((prev) => [...prev, option]);
    setStep((s) => s + 1);
  };

  let labels, card;
  if (step === -1) {
    labels = [invitation.labels.rsvp, invitation.labels.honest];
    card = <Intro config={invitation.intro} details={invitation} onYes={() => setStep(0)} />;
  } else if (step < total) {
    labels = [invitation.labels.question(step + 1, total), invitation.labels.honest];
    card = <Question question={invitation.questions[step]} onAnswer={answer} />;
  } else {
    labels = [invitation.labels.verdict, invitation.labels.final];
    card = <Verdict answers={answers} config={invitation} onRestart={restart} />;
  }

  return (
    <>
      <Header brand={invitation.brand} couple={invitation.couple} left={labels[0]} right={labels[1]} />
      <main id="stage">
        {/* key fuerza el remontaje para relanzar la animación de entrada */}
        <div key={step} className="card-wrap">
          {card}
        </div>
      </main>
    </>
  );
}
