import React from 'react';
import './Footer.css';
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <Link className="footerLogo" to="/">
        Shortly
      </Link>

      <div className="features">
        <h3>Features</h3>
        <p>Link Shortening</p>
        <p>Branded Links</p>
        <p>Analytics</p>
      </div>

      <div className="resources">
        <h3>Resources</h3>
        <p>Blog</p>
        <p>Developers</p>
        <p>Support</p>
      </div>

      <div className="company">
        <h3>Company</h3>
        <p>About</p>
        <p>Careers</p>
        <p>Contact</p>
      </div>

      <div className="socials">
        <img src="images/icon-facebook.svg" alt="" />
        <img src="images/icon-instagram.svg" alt="" />
        <img src="images/icon-pinterest.svg" alt="" />
        <img src="images/icon-twitter.svg" alt="" />
      </div>
    </div>
  );
}

export default Footer;