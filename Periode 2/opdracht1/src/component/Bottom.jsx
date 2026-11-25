import "../css/App.css";
import winkelFoto from "../assets/winkel.jpg";

function Bottom() {
  return (
    <>
      <section id="location" className="container py-4 text-white">
        <div className="row align-items-center gy-3">
          <div className="col-12 col-md-6">
            <img
              src={winkelFoto}
              className="img-fluid"
              alt="Voorkant van de bloemenwinkel"
            />
          </div>

          <div className="col-12 col-md-6">
            <h2>Visit Our Shop</h2>

            <p>
              123 Flower Street
              <br />
              Garden District
              <br />
              Bloomtown, BT 45678
            </p>

            <p>
              Open Monday to Saturday
              <br />
              9:00 AM – 6:00 PM
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Bottom;
