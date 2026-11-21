import { useMemo } from "react";
import { createPortal } from "react-dom";

const COLORS = ["#7a1f2b", "#d9607a", "#e9c46a", "#f4d6dc"];

export default function Confetti({ count = 80 }) {
  const pieces = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        left: `${Math.random() * 100}vw`,
        background: COLORS[i % COLORS.length],
        animationDelay: `${Math.random() * 0.6}s`,
        animationDuration: `${2 + Math.random() * 1.5}s`,
      })),
    [count]
  );

  return createPortal(
    pieces.map((style, i) => <span key={i} className="confetti" style={style} />),
    document.body
  );
}
