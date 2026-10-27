import "./Offers.css";

const offers = [
  {
    title: "Clean Modern Code",
    description:
      "Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque lobortis...",
  },
  {
    title: "Design To Brag About",
    description:
      "Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque lobortis...",
  },
];

function Offers() {
  return (
    <section className="offers-section" id="offers">
      <div className="container-fluid p-0">
        <div className="row g-0">
          <div className="col-12 col-lg-6">
            <div
              className="offers-image"
              role="img"
              aria-label="Collega's werken samen op kantoor"
            ></div>
          </div>

          <div className="col-12 col-lg-6 offers-content">
            <p className="section-label">
              ELABORATED CODE AND CREATIVE DESIGN
            </p>

            <h2>WHAT WE OFFERS</h2>

            <blockquote>
              Duis sed odio sit amet nibh vulputate cursus a sit amet
              mauris ipsuy veli. Nam nec tellus a odio tincidunt auctor.
            </blockquote>

            <div className="row g-4 offers-grid">
              {offers.map((offer) => (
                <article
                  className="col-12 col-md-6"
                  key={offer.title}
                >
                  <h3>{offer.title}</h3>
                  <p>{offer.description}</p>

                  <a className="read-more" href="#services">
                    READ MORE
                  </a>
                </article>
              ))}
            </div>

            <a className="dark-button" href="#services">
              VIEW ALL OFFERS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Offers;