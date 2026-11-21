import { useRef, useState } from "react";

export default function Intro({ config, onYes }) {
  const cardRef = useRef(null);
  const noRef = useRef(null);
  const yesRef = useRef(null);
  const [noPos, setNoPos] = useState(null);

  // El botón "No" salta a una posición aleatoria dentro de la tarjeta
  const flee = (e) => {
    e.preventDefault();
    const card = cardRef.current.getBoundingClientRect();
    const btn = noRef.current.getBoundingClientRect();
    const maxX = card.width - btn.width - 16;
    const maxY = card.height - btn.height - 16;
    const curX = btn.left - card.left;
    const curY = btn.top - card.top;
    let x, y;
    do {
      x = 8 + Math.random() * maxX;
      y = 8 + Math.random() * maxY;
    } while (Math.abs(x - curX) < btn.width && Math.abs(y - curY) < btn.height);
    setNoPos({ left: x, top: y });
  };

  return (
    <section className="card" ref={cardRef}>
      <div className="icon">↓</div>
      <p className="eyebrow">{config.eyebrow}</p>
      <h1>{config.question}</h1>
      <div className="actions">
        <button ref={yesRef} className="btn btn-primary" type="button" onClick={onYes}>
          {config.yes}
        </button>
        <button
          ref={noRef}
          type="button"
          className={`btn btn-ghost no-btn${noPos ? " fleeing" : ""}`}
          style={noPos ?? undefined}
          onMouseEnter={flee}
          onTouchStart={flee}
          onClick={flee}
          onFocus={() => yesRef.current.focus()}
        >
          {config.no}
        </button>
      </div>
    </section>
  );
}
