import "./Offers.css";

const offers = [
  {
    icon: "♞",
    title: "Clean Modern Code",
    description:
      "Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque lobortis...",
  },
  {
    icon: "♜",
    title: "Design To Brag About",
    description:
      "Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque lobortis...",
  },
];

function Offers() {
  return (
    <section className="offers-section" id="offers">
      <div className="container-fluid">
        <div className="row g-0">
          <div className="col-12 col-lg-6">
            <img
              className="offers-image"
              src="/images/offers.jpg"
              alt="Twee collega's bekijken samen een tablet"
              loading="lazy"
            />
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
                  <span className="offer-icon" aria-hidden="true">
                    {offer.icon}
                  </span>

                  <h3>{offer.title}</h3>
                  <p>{offer.description}</p>

                  <a className="read-more" href="#services">
                    READ MORE »
                  </a>
                </article>
              ))}
            </div>

            <a className="dark-button" href="#services">
              VIEW ALL OFFERS »
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Offers;