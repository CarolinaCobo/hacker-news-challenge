import "./Button.css";

function Button({
  onClick,
  active,
  large,
  disabled,
  children,
  type = "button",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`Button${active ? " Button--active" : ""}${
        large ? " Button--large" : ""
      }`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
