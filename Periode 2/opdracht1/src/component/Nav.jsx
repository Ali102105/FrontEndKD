import '../css/App.css';

function Nav() {
  return (
    <nav className="navbar navbar-expand-sm bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand ms-5" href="#">Florist</a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Menu openen"
        >
          <span className="navbar-toggler-icon"></span>
        </button> 

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Roses</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Bouquets</a>
            </li>
            <li className='nav-item'>
                <a className="nav-link" href="#">Plants</a>
            </li>
            <li className='nav-item'>
                <a className="nav-link" href="#">Gifts</a>
            </li>
            <li className='nav-item'>
                <a className="nav-link" href="#">Location</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;