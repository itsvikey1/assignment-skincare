import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../navbar/img/heroimg2.png';
import './Herosection1.css';

function Herosection1() {
  return (
    <>
      <div className="hero-container">
        <div className="skincare-banner">SKINCARE</div>
        <div className="hero-section">
          <div className="hero-content">
            <img src={heroImage} alt="Glow Naturally" className="hero-img2" />
            <Link to="#" className="hero-button">Shop Now</Link>
          </div>
        </div>
      </div>

      {/* ✅ Text section outside the container */}
      <div className="text-section">
    <p className="text-content">
      Experience the ultimate in skincare with our expertly formulated products, crafted to nourish, protect, and rejuvenate your skin.
      <span className="text-span">
        {' '}
        Combining the finest natural ingredients with advanced science, our collection ensures every skin type can achieve a radiant, healthy glow. Embrace your beauty with confidence every day.
      </span>
    </p>
  </div>
    </>
  );
}

export default Herosection1;
