import "./BackToTop.css";

function BackToTop() {
  return (
    <a
      className="back-to-top"
      href="#home"
      aria-label="Terug naar boven"
    >
      <span className="back-to-top-arrow" aria-hidden="true"></span>
    </a>
  );
}

export default BackToTop;