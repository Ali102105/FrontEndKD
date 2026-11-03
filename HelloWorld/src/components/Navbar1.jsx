import "./Navbar1.css";

function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar navbar-expand-lg" aria-label="Hoofdnavigatie">
        <div className="container">
          <a className="navbar-brand alteco-brand" href="#home">
            <span><strong>Ali</strong><small>Website</small></span>
          </a>
          
          <button className="navbar-toggler" type="button"
            data-bs-toggle="collapse" data-bs-target="#mainMenu"
            aria-controls="mainMenu" aria-expanded="false"
            aria-label="Menu openen of sluiten">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mainMenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link home-link" href="#home">HOME</a></li>
              <li className="nav-item"><a className="nav-link" href="#offers">ABOUT US</a></li>
              <li className="nav-item"><a className="nav-link" href="#services">SERVICES</a></li>
              <li className="nav-item dropdown">
                <button className="nav-link" type="button" id="pagesMenu"
                  data-bs-toggle="dropdown" aria-expanded="false">PAGES</button>
                <ul className="dropdown-menu" aria-labelledby="pagesMenu">
                  <li><a className="dropdown-item" href="#home">Home</a></li>
                  <li><a className="dropdown-item" href="#offers">Offers</a></li>
                  <li><a className="dropdown-item" href="#services">Services</a></li>
                  <li><a className="dropdown-item" href="#contact">Contact</a></li>
                </ul>
              </li>
              <li className="nav-item"><span className="nav-link unavailable-link" aria-disabled="true" title="Deze pagina is nog niet gemaakt">SHOP</span></li>
              <li className="nav-item"><span className="nav-link unavailable-link" aria-disabled="true" title="Deze pagina is nog niet gemaakt">BLOG</span></li>
              <li className="nav-item"><a className="nav-link" href="#contact">CONTACT US</a></li>
            </ul>
            <span className="nav-search-decoration" aria-hidden="true"></span>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
