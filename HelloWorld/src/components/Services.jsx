import "./Services.css";
const services = [
  {
    title: "PROMOTION AGENCY",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod dolore tempor incididunt ut labore.",
  },
  {
    title: "CONSTRUCTIONS BUILDING",
    description:
      "Non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem minima.",
  },
  {
    title: "EDUCATION ONLINE",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod dolore tempor incididunt ut labore.",
  },
  {
    title: "FASHION DESIGN",
    description:
      "Non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem minima.",
  },
];

function Services() {
  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="section-heading">
          <p className="section-label">
            ELABORATED CODE AND CREATIVE DESIGN
          </p>

          <h2>OUR SERVICES</h2>

          <div className="heading-decoration" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <p className="services-intro">
            Non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam,
            quis nostrum.
          </p>
        </div>

        
        <div className="row g-5">
          {services.map((service) => (
            <article
              className="col-12 col-md-6 col-lg-3 service-card"
              key={service.title}
            >
              <p className="section-label">TUTORIALS TO HELP</p>

              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;