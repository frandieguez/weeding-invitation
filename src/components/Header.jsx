export default function Header({ couple, left, right }) {
  return (
    <header className="top">
      <p className="brand">Una pequeña invitación</p>
      <p className="couple">{couple}</p>
      <div className="labels">
        <span>{left}</span>
        <span>{right}</span>
      </div>
    </header>
  );
}
