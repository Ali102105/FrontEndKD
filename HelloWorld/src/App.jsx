import "./App.css";
import Topbar from "./components/Topbar.jsx";
import Navbar from "./components/Navbar1.jsx";
import Hero from "./components/Hero.jsx";
import Offers from "./components/Offers.jsx";
import Services from "./components/Services.jsx";
import Footer from "./components/Footer.jsx";
import BackToTop from "./components/BackToTop.jsx";
function App() {
  return (
    <>
      <Topbar />
      <Navbar />

      <main>
        <Hero />
        <Offers />
        <Services />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}

export default App;