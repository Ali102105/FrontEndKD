import "./App.css";

import Navbar from "./components/Navbar1.jsx";
import Hero from "./components/Hero.jsx";
import Offers from "./components/Offers.jsx";
import Services from "./components/Services.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Offers />
        <Services />
      </main>

      <Footer />

      <a
        className="back-to-top"
        href="#home"
        aria-label="Terug naar boven"
      >
        ↑
      </a>
    </>
  );
}

export default App;