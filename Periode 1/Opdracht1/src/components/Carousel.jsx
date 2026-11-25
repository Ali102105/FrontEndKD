import imageOne from '../assets/Carousel-img1.png'
import imageTwo from '../assets/Carousel-img2.png'
import imageThree from '../assets/Carousel-img3.png'
import './Carousel.css'

function Carousel() {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
      style={{ maxWidth: '1200px', margin: '2rem auto' }}
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={imageOne} className="d-block w-100" alt="First slide" />
          <div className="carousel-caption">
            <h5 className="carouselTitle">Business <b>YOUR SATISFICTION</b></h5>
            <p className="carouselParagraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>

        <div className="carousel-item">
          <img src={imageTwo} className="d-block w-100" alt="Second slide" />
          <div className="carousel-caption">
            <h5 className="carouselTitle">Second slide</h5>
            <p className="carouselParagraph">Meer content, meer aandacht, meer resultaat.</p>
          </div>
        </div>

        <div className="carousel-item">
          <img src={imageThree} className="d-block w-100" alt="Third slide" />
          <div className="carousel-caption">
            <h5 className="carouselTitle">Third slide</h5>
            <p className="carouselParagraph">Laat je bezoekers meteen zien wat jij biedt.</p>
          </div>
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default Carousel
