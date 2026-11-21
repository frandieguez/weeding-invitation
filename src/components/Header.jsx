export default function Header({ left, right }) {
  return (
    <header className="top">
      <p className="brand">Una pequeña invitación</p>
      <div className="labels">
        <span>{left}</span>
        <span>{right}</span>
      </div>
    </header>
  );
}
