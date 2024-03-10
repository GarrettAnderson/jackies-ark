import "./App.css";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Header from "./Components/Header";
import About from "./Components/About";
import Services from "./Components/Services";
import Testimonial from "./Components/Testimonial";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header />

      <main className="content-container">
        <section className="info-section">
          <About />
          <Services />
        </section>

        <section className="contact-info-section">
          {/* <h4>GET IN TOUCH</h4> */}
          <div className="contact-card">
            <ol>
              <li>PHONE</li>
              <li>EMAIL</li>
            </ol>
          </div>
        </section>

        <section className="testimonials-section">
          <div className="slider-container">
            {/* left button of slider */}
            <FontAwesomeIcon icon={faChevronLeft} />

            <Testimonial />
            {/* ADD PAGINATION ?? */}

            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
