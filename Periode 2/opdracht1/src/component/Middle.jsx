import "../css/App.css";
import bloem1 from "../assets/Bloem1.jpg";
import bloem2 from "../assets/Bloem2.jpg";
import bloem3 from "../assets/Bloem3.jpg";
import { useEffect, useState } from "react";

function Middle() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("/categories.json")
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <>
      <main className="container py-5">
        <div className="row align-items-center g-4">
          <div className="col-md-6 text-white">
            <h1>Fresh Flowers, Thoughtfully Arranged</h1>
            <p>
              Seasonal blooms crafted for everyday moments and meaningful
              occasions. Sourced responsibly and arranged with care.
            </p>
            <a href="#" className="btn btn-primary">
              Shop Flowers
            </a>
          </div>

          <div className="col-md-6">
            <div id="carouselExample" className="carousel slide">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={bloem1}
                    className="d-block w-100"
                    alt="Afbeelding 1"
                  />
                </div>

                <div className="carousel-item">
                  <img
                    src={bloem2}
                    className="d-block w-100"
                    alt="Afbeelding 2"
                  />
                </div>

                <div className="carousel-item">
                  <img
                    src={bloem3}
                    className="d-block w-100"
                    alt="Afbeelding 3"
                  />
                </div>
              </div>

              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Vorige</span>
              </button>

              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Volgende</span>
              </button>
            </div>
          </div>
        </div>

        <section id="card">
          {categories.map((category) => (
            <div className="Card p-2 h-auto text-dark" key={category.id}>
              <h3 className="h5">{category.title}</h3>
              <p className="mb-0">{category.description}</p>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}

export default Middle;
