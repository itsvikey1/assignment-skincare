
import React from 'react';
import './Card.css';
import cardImage from '../navbar/img/cardimg.png'; // Replace with your image path
import BestSellingSlider from '../slide/BestSellingSlider';

const Card = () => {
  return (
    <div className="card-wrapper">
      <div className="card-container">
        <img src={cardImage} alt="Feel Beautiful" className="card-img" />
        <div className="card-overlay">
          <h1 className="card-text">
            Feel Beautiful Inside and Out<br />with Every Product.
          </h1>
          <button className="card-button">Shop Now</button>
        </div>
      </div>
      <p className="card-below-text">
        Feel Beautiful Inside and Out<br />with Every Product.
      </p>
      <BestSellingSlider/>
    </div>
  );
};

export default Card;
