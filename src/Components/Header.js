import "../Assets/Styles/Header.css";

function Header() {
  return (
    <header className="header-container">
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
