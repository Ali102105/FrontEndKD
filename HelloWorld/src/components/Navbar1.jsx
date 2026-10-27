import "./Navbar1.css";

function Navbar() {
  return (
    <>

      <header className="site-header">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a className="navbar-brand alteco-brand" href="#home">

              <span>
                <strong>Ali</strong>
                <small>Website</small>
              </span>
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mainMenu"
              aria-controls="mainMenu"
              aria-expanded="false"
              aria-label="Menu openen of sluiten"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="mainMenu">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link active" href="#home">
                    HOME
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#offers">
                    ABOUT US
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#services">
                    SERVICES
                  </a>
                </li>

                <li className="nav-item">
                  <span className="nav-link">PAGES</span>
                </li>

                <li className="nav-item">
                  <span className="nav-link">SHOP</span>
                </li>

                <li className="nav-item">
                  <span className="nav-link">BLOG</span>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="mailto:infoyoursite@mail.com"
                  >
                    CONTACT US
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;