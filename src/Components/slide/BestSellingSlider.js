// BestSellingSlider.jsx
import React, { useRef } from 'react';
import './BestSellingSlider.css';

import product1 from '../navbar/img/slide1 (3).jpg';
import product2 from '../navbar/img/slide1 (2).jpg';
import product3 from '../navbar/img/slide1 (1).jpg';

const products = [
  {
    image: product1,
    name: 'ALYA SKIN CLEANSER.',
    price: 'FROM $29.99',
  },
  {
    image: product2,
    name: 'RITUAL OF SAKURA.',
    price: 'FROM $27.99',
  },
  {
    image: product3,
    name: 'THE BODY LOTION.',
    price: 'FROM $19.99',
  },
];

const BestSellingSlider = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -600, behavior: 'smooth' });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 600, behavior: 'smooth' });
  };

  return (
    <section className="slider-section">
      <button className="best-seller-button">Best Selling Products</button>
      <h1 className="slider-title">
        Skincare That Brings Out<br />Your Natural Radiance
      </h1>

      <div className="slider-controls">
        <button className="arrow left" onClick={scrollLeft}>&#8592;</button>
        <button className="arrow right" onClick={scrollRight}>&#8594;</button>
      </div>

      <div className="product-slider" ref={sliderRef}>
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.image} alt={product.name} className="product-img" />
            <div className="product-info">
              <div className="text-info">
                <div className="product-name">{product.name}</div>
                <div className="product-price">{product.price}</div>
              </div>
              <div className="cart-icon-placeholder">🛒</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSellingSlider;
