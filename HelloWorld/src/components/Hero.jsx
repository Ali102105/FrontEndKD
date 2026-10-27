import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <h1>Business YOUR SATISFACTION</h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <div className="hero-buttons">
            <a className="outline-button" href="#offers">
              ABOUT US
            </a>

            <a className="outline-button" href="#services">
              SERVICES
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;