import "../Assets/Styles/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header className="header-container">
      <nav className="header-mobile-nav">
        <FontAwesomeIcon icon={faBars} />
      </nav>

      <nav className="header-desktop-nav">
        <ol>
          <li>ABOUT</li>
          <li>SERVICES</li>
          <li>CONTACT</li>
        </ol>
      </nav>
      <section>
        <h1>JACKIE'S ARK</h1>
      </section>
    </header>
  );
}

export default Header;
