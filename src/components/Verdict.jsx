import Confetti from "./Confetti.jsx";

export default function Verdict({ answers, config, onRestart }) {
  const failed = answers.find((a) => a.fail);
  const v = failed
    ? { ...config.fail, tag: failed.fail.tag, note: failed.fail.note }
    : config.success;
  const mark = failed ? "✕" : "✓";

  return (
    <section className={`card verdict ${failed ? "is-fail" : "is-ok"}`}>
      {!failed && <Confetti />}
      <div className="icon round">{mark}</div>
      <p className="tag">
        {mark} {v.tag}
      </p>
      <h2 className="big">{v.title}</h2>
      <p className="subtitle">{v.subtitle}</p>
      <p className="note">{v.note}</p>
      <div className="actions">
        <span className="btn badge">
          {mark} {v.badge}
        </span>
        <button className="btn btn-ghost" type="button" onClick={onRestart}>
          {v.retry}
        </button>
      </div>
      <p className="signature">{config.signature}</p>
    </section>
  );
}
