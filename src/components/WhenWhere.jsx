export default function WhenWhere({ date, place }) {
  const parts = [date, place].filter(Boolean);
  if (!parts.length) return null;
  return <p className="when-where">{parts.join(" · ")}</p>;
}
