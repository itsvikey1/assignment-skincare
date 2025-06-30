import React from 'react'
import './Herosection2.css'
import productImg from '../navbar/img/heroimg3.png'
function Herosection2() {
  return (
    <div>
    <section className="why-card-full">
      {/* LEFT SECTION */}
      <div className="left-section">
        <button className="why-button">Why Our Products</button>

        <h1 className="main-heading">
          YOUR SKIN DESERVES<br />THE BEST CARE.
        </h1>

        <p className="main-description">
          Discover a curated collection of skincare products designed to rejuvenate,
          protect, and pamper your skin. Explore our range crafted with love backed
          by science, and inspired by nature.
        </p>

        {/* Feature 1 */}
        <div className="feature-block">
          <h2 className="feature-title">01 Bio Ingredients</h2>
          <p className="feature-description">
            Get naturally beautiful and transform with our bio ingredients creams for healthy, radiant skin.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="feature-block">
          <h2 className="feature-title">02 Everything Natural</h2>
          <p className="feature-description">
            Pure ingredients for pure skin. The perfect solution for your skin care needs.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="feature-block">
          <h2 className="feature-title">03 All Handmade</h2>
          <p className="feature-description">
            Made with love and care. Just for you. Give your skin the tender loving care it deserves.
          </p>
        </div>

        <div className="footer-text">
          <span>SINCE 2001</span>
          <span>LEARN MORE</span>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="right-section">
        <img src={productImg} alt="Skincare Model" className="product-image" />
        <div className="award-badge">
          Best Skin Care Product<br />Award Winning
        </div>
      </div>
    </section>
 
</div>
  )
}

export default Herosection2