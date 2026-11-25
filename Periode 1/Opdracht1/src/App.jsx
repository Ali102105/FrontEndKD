import "./App.css";
import Footer from "./components/FooterComponent.jsx";
import Navbar from "./components/NavbarComponent.jsx";
import Carousel from "./components/Carousel.jsx";
import Cards from "./components/Cards.jsx";
import Middle from "./components/Middle.jsx"

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Carousel />
        <Cards />
        <Middle />
      </main>
      <Footer />
    </>
  );
}

export default App;
