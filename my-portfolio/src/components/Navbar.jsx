import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Smooth scroll and close menu on click
  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false); // Closes mobile menu after selecting a section
  };

  return (
    <header className="main-portfolio-header">
      <div className="header-nav-container">
        {/* Left Side: Logo badge + Branding text */}
        <div
          className="header-logo-block"
          onClick={(e) => handleScroll(e, "hero")}
        >
          <div className="logo-letter-badge">SP</div>
          <span className="logo-title-text">Sachith Portfolio</span>
        </div>

        {/* Desktop Navigation Side (Hidden on Mobile) */}
        <div className="header-right-side-desktop">
          <nav className="header-nav-menu">
            <a
              href="#about"
              onClick={(e) => handleScroll(e, "about")}
              className="header-menu-link"
            >
              About
            </a>
            <a
              href="#projects"
              onClick={(e) => handleScroll(e, "projects")}
              className="header-menu-link"
            >
              Work
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, "contact")}
              className="header-menu-link"
            >
              Contact
            </a>
          </nav>
          <a
            href="/my-cv.pdf"
            download="Sachith_Prabhashana_CV.pdf"
            className="navbar-cv-btn"
          >
            Download CV
          </a>
        </div>

        {/* Mobile Hamburger Button Menu Icon (Visible only on Mobile) */}
        <button
          className={`mobile-hamburger-btn ${isMenuOpen ? "is-active" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          <span className="bar-line"></span>
          <span className="bar-line"></span>
          <span className="bar-line"></span>
        </button>
      </div>

      {/* Mobile Drawer Dropdown Panel */}
      <div
        className={`mobile-dropdown-drawer ${isMenuOpen ? "drawer-open" : ""}`}
      >
        <nav className="mobile-drawer-links">
          <a
            href="#about"
            onClick={(e) => handleScroll(e, "about")}
            className="mobile-drawer-link"
          >
            About
          </a>
          <a
            href="#projects"
            onClick={(e) => handleScroll(e, "projects")}
            className="mobile-drawer-link"
          >
            Work
          </a>
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, "contact")}
            className="mobile-drawer-link"
          >
            Contact
          </a>
          <a
            href="/my-cv.pdf"
            download="Sachith_Prabhashana_CV.pdf"
            className="navbar-cv-btn mobile-cv-btn"
          >
            Download CV
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
