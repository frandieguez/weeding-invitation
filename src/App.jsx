import { useState } from "react";
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
    labels = ["RSVP", "Sé honesta"];
    card = <Intro config={invitation.intro} onYes={() => setStep(0)} />;
  } else if (step < total) {
    labels = [`Pregunta ${step + 1}`, "Sé honesta"];
    card = <Question question={invitation.questions[step]} onAnswer={answer} />;
  } else {
    labels = ["El veredicto", "Respuesta final"];
    card = <Verdict answers={answers} config={invitation} onRestart={restart} />;
  }

  return (
    <>
      <Header left={labels[0]} right={labels[1]} />
      <main id="stage">
        {/* key fuerza el remontaje para relanzar la animación de entrada */}
        <div key={step} className="card-wrap">
          {card}
        </div>
      </main>
    </>
  );
}
