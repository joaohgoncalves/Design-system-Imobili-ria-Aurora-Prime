export function StatusPill({ value, label }) {
  return <span className={`ds-pill ds-pill-${value}`}>{label || value}</span>;
}
