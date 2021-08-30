import "./LinkButton.css";

function LinkButton({ onClick, href, children }) {
  return (
    <a href={href} onClick={onClick} className="LinkButton">
      {children}
    </a>
  );
}

export default LinkButton;
