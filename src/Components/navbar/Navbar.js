import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import productImage from "./img/hero img1.jpg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNavClick = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
  
 <div className="logo">
        <Link to="/" onClick={handleNavClick}>SKINCARE</Link>
      </div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
        <ul className={`nav-tabs ${menuOpen ? 'open' : ''}`}>
        <li><Link to="/products" onClick={handleNavClick}>All Products</Link></li>
        <li><Link to="/serum" onClick={handleNavClick}>Serum</Link></li>
        <li><Link to="/sunscreen" onClick={handleNavClick}>Sunscreen</Link></li>
        <li><Link to="/bundle" onClick={handleNavClick}>Bundle</Link></li>
      </ul>

      <div className="icons">
        <span className="icon">♡</span>
        <span className="icon">🛒 Cart (1)</span>
        <span className="icon">👤</span>
      </div>
    </nav>
  );
};

const MainSection = () => {
  return (
    <section className="main-section">
      <div className="text-block">
        <p>
          Transform your skincare routine with premium products that restore,
          protect, and enhance your natural glow every day.
        </p>
      </div>
      <div className="headline">
        <h1>
          <span>GLOW</span>
          <br />
          <span>NATUR-</span>
          <br />
          <span>ALLY</span>
        </h1>
      </div>
      <div className="product-image">
        <img src={productImage} alt="Product" />
      </div>
    </section>
  );
};

const App = () => {
  return (
    <div>
      <Navbar />
      <MainSection />
    </div>
  );
};

export default App;