import "./Button.css";

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
}) {
  if (href) {
    return (
      <a href={href} className={`btn ${variant}`} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button className={`btn ${variant}`} onClick={onClick}>
      {children}
    </button>
  );
}
