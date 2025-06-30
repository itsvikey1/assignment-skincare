import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-top">
        <div className="footer-left">
          <h2 className="footer-heading">Join The Skincare<br />Community Now.</h2>
        </div>
        <div className="footer-right">
          <p className="footer-subheading">Get in Touch</p>
          <p className="footer-contact">contact.skincare.com</p>
        </div>
      </div>

     <div className="footer-bottom">
  <div className="footer-bottom-left">
    <span>Facebook</span>
    <span>Instagram</span>
    <span>YouTube</span>
  </div>
  <div className="footer-bottom-right">
    <span>Terms of Service</span>
    <span>Privacy Policy</span>
    <span>Cookies Policy</span>
  </div>
</div>


      <div className="footer-banner">SKINCARE</div>
    </footer>
  );
}

export default Footer;