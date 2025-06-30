
import React from "react";
import "./Navbar.css";
import productImage from ".//img/hero img1.jpg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">SKINCARE</div>
      <ul className="nav-tabs">
        <li>All Products</li>
        <li>Serum</li>
        <li>Sunscreen</li>
        <li>Bundle</li>
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
      <MainSection/>
    </div>
  );
};

export default App;
