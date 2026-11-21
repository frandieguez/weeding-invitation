import { useRef, useState } from "react";
import { createPortal } from "react-dom";
import WhenWhere from "./WhenWhere.jsx";

const MARGIN = 12;

const overlaps = (a, b, pad = 16) =>
  a.left < b.right + pad &&
  a.right > b.left - pad &&
  a.top < b.bottom + pad &&
  a.bottom > b.top - pad;

export default function Intro({ config, details, onYes }) {
  const noRef = useRef(null);
  const yesRef = useRef(null);
  const [noPos, setNoPos] = useState(null);

  // El botón "No" salta a cualquier punto visible de la pantalla,
  // sin caer encima del "Sí" ni de donde estaba (cursor/dedo).
  const flee = (e) => {
    e.preventDefault();
    const btn = noRef.current.getBoundingClientRect();
    const yes = yesRef.current.getBoundingClientRect();
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const maxX = vw - btn.width - MARGIN;
    const maxY = vh - btn.height - MARGIN;

    let pos;
    for (let i = 0; i < 50; i++) {
      const left = MARGIN + Math.random() * (maxX - MARGIN);
      const top = MARGIN + Math.random() * (maxY - MARGIN);
      const rect = { left, top, right: left + btn.width, bottom: top + btn.height };
      pos = { left, top };
      if (!overlaps(rect, yes) && !overlaps(rect, btn, 40)) break;
    }
    setNoPos(pos);
  };

  const noButton = (
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
  );

  return (
    <section className="card">
      <div className="icon">↓</div>
      <p className="eyebrow">{config.eyebrow}</p>
      <h1>{config.question}</h1>
      <WhenWhere date={details.date} place={details.place} />
      <div className="actions">
        <button ref={yesRef} className="btn btn-primary" type="button" onClick={onYes}>
          {config.yes}
        </button>
        {/* Una vez huye, se saca del card para moverse por toda la pantalla */}
        {noPos ? (
          <>
            <span className="btn btn-ghost no-placeholder" aria-hidden="true">
              {config.no}
            </span>
            {createPortal(noButton, document.body)}
          </>
        ) : (
          noButton
        )}
      </div>
    </section>
  );
}
