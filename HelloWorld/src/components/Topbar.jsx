import "./Topbar.css";

function Topbar() {
  return (
    <div className="topbar">
      <div className="container d-flex flex-wrap align-items-center justify-content-between gap-3">
        <div className="topbar-contact d-flex flex-wrap gap-3 gap-md-4">
          <a href="mailto:infoyoursite@mail.com">infoyoursite@mail.com</a>
          <a href="tel:+77000453">+77 000 453</a>
        </div>
        <a className="btn btn-primary rounded-pill quote-button" href="#contact">GET A QUOTE</a>
      </div>
    </div>
  );
}

export default Topbar;
