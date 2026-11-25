import "../App.css";

function Middle() {
  return (
    <section className="middle">
      <div className="container-fluid">
        <div className="row g-0">

          {/* LINKERKANT */}
          <div className="col-lg-6">
            <img
              className="middle-image"
              src="https://cybrogenit.com/wp-content/uploads/2025/09/Untitled-design-50-1024x576.png"
              alt="Developers"
            />
          </div>

          {/* RECHTERKANT */}
          <div className="col-lg-6 middle-content">

            <p className="middle-small-title">
              ELABORATED CODE AND CREATIVE DESIGN
            </p>

            <h1>WHAT WE OFFER</h1>

            <div className="middle-intro">
              <p>
                We build modern and professional software solutions.
              </p>

              <p>
                Clean code and creative design.
              </p>
            </div>

            {/* TWEE BLOKKEN */}
            <div className="row mt-5">

              <div className="col-md-6">
                <h3>Clean Modern Code</h3>

                <p>
                  We create clean, readable and maintainable code
                  for modern applications.
                </p>

                <a href="#">READ MORE »</a>
              </div>

              <div className="col-md-6">
                <h3>Design To Brag About</h3>

                <p>
                  Modern designs that make websites easy to use
                  and visually attractive.
                </p>

                <a href="#">READ MORE »</a>
              </div>

            </div>

            <button className="offer-button">
              VIEW ALL OFFERS »
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Middle;