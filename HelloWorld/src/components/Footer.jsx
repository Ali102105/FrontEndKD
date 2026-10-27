import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row g-4">
          <div className="col-12 col-md-6 col-lg-4">
            <h2 className="footer-logo">Ali's Website</h2>
            <p>
              Business Template. We help your business grow with
              creative design and modern solutions.
            </p>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <h3>QUICK LINKS</h3>

            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#offers">About us</a></li>
              <li><a href="#services">Services</a></li>
            </ul>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <h3>CONTACT US</h3>

            <ul className="footer-links">
              <li>
                <a href="mailto:infoyoursite@mail.com">
                  infoyoursite@mail.com
                </a>
              </li>
              <li>
                <a href="tel:+77000453">+77 000 453</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Ali's Website. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;