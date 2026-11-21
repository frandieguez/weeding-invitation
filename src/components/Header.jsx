export default function Header({ brand, couple, left, right }) {
  return (
    <header className="top">
      <p className="brand">{brand}</p>
      <p className="couple">{couple}</p>
      <div className="labels">
        <span>{left}</span>
        <span>{right}</span>
      </div>
    </header>
  );
}
