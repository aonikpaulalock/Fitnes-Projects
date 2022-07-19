import React from 'react';
import "../Styles/Footer.css"
const Footer = () => {
  return (
    <>
      <div className="frist-back">
        <div className="container">
          <div className="frist-content">
            <h1 className="footer-heading">Everst</h1>
            <div className="footer-sub-heading">
              <span>Home</span>
              <span>About</span>
              <span>Classes</span>
              <span>Blog</span>
              <span>Schudule</span>
              <span>Contact</span>
            </div>
          </div>
        </div>
      </div>
      <div className="second-back">
        <div className="container">
          <div className="second-foooter-content">
            <h6 className="second-footer-heading">© Template by <span>Flowbase</span> - Powered by <span>Webflow</span></h6>
            <div className="second-footer-sub-heading">
              <span>Syle Giide</span>
              <span>Changelog</span>
              <span>Licence</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;