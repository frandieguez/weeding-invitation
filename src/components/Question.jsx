import { useEffect, useRef, useState } from "react";

export default function Question({ question, onAnswer }) {
  const [picked, setPicked] = useState(null);
  const timer = useRef();

  useEffect(() => () => clearTimeout(timer.current), []);

  const pick = (option, i) => {
    if (picked !== null) return;
    setPicked(i);
    // pequeña pausa para que se vea la opción marcada
    timer.current = setTimeout(() => onAnswer(option), 350);
  };

  return (
    <section className="card">
      <h2>{question.title}</h2>
      <div className="options">
        {question.options.map((opt, i) => (
          <button
            key={opt.text}
            type="button"
            className={`option${picked === i ? " picked" : ""}`}
            onClick={() => pick(opt, i)}
          >
            {opt.text}
          </button>
        ))}
      </div>
    </section>
  );
}
