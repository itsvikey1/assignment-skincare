import React, { useState } from 'react';
import './Card2.css';

import productImg from '../navbar/img/card2img.jpg';

const faqs = [
  {
    question: 'Are your products safe for sensitive skin?',
    answer:
      'Yes, our products are formulated with gentle, non-irritating ingredients suitable for sensitive skin.',
  },
  {
    question: 'Are your products cruelty-free?',
    answer:
      'Absolutely! All our products are cruelty-free, and most are vegan. Check individual product details for specifics.',
  },
  {
    question: "What's your return policy?",
    answer:
      'We offer a 30-day return policy. If you’re not satisfied, contact our support to initiate a return.',
  },
  {
    question: 'Do you ship internationally?',
    answer:
      'Yes, we ship worldwide. Shipping costs and delivery times vary depending on location.',
  },
  {
    question: 'How do I choose the right product?',
    answer:
      'Use our product guide or consult with our skincare experts via live chat for personalized recommendations.',
  },
];

function Card2() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="card2-wrapper">
      <div className="card2-img-container">
        <img src={productImg} alt="The Body Lotion" className="card2-img" />
        <div className="card2-help-wrapper">
          <div className="card2-help-icon">🎧</div>
          <span className="card2-help-text">24/7 We’re Here to Help You</span>
        </div>
      </div>

      <div className="card2-content">
        <button className="card2-faq-button">Frequently Asked Question</button>
        <h2 className="card2-heading">
          Answers to Your <br /> Skincare Questions, All <br /> in One Place.
        </h2>
        <div className="card2-faqs">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-question ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="card2-faq-question">
                {faq.question}
                <span className="card2-toggle">{activeIndex === index ? '−' : '+'}</span>
              </div>
              {activeIndex === index && faq.answer && (
                <div className="faq-answer">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card2;