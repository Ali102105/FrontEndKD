import "./Hero.css";

const slides = [
  {
    photo: "hero-first",
    title: "Business YOUR SATISFACTION",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    photo: "hero-second",
    title: "Creative Design And Modern Solutions",
    text: "We help your business grow with creative design and modern solutions.",
  },
];

function Hero() {
  return (
    <section id="home">
      <div id="heroCarousel" className="carousel slide carousel-fade">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Eerste slide"
          ></button>
          <button
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide-to="1"
            aria-label="Tweede slide"
          ></button>
        </div>

        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div
              className={index === 0 ? "carousel-item active" : "carousel-item"}
              key={slide.title}
            >
              <div className={`hero ${slide.photo}`}>
                <div className="container">
                  <div className="hero-content">
                    {index === 0 ? (
                      <h1>{slide.title}</h1>
                    ) : (
                      <h2 className="hero-title">{slide.title}</h2>
                    )}
                    <p>{slide.text}</p>
                    <div className="hero-buttons">
                      <a className="outline-button" href="#offers">ABOUT US</a>
                      <a className="outline-button" href="#services">SERVICES</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="prev"
          aria-label="Vorige slide"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="next"
          aria-label="Volgende slide"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>
    </section>
  );
}

export default Hero;
