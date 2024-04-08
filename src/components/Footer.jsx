import React from "react";
import logo from "../assets/abstract.svg";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-inner">
        <div id="column-1" className="footer-column">
          <h3 className="footer-header">Abstract</h3>
          <ul>
            <li>
              <a href="">Start Trial</a>
            </li>
            <li>
              <a href="">Pricing</a>
            </li>
            <li>
              <a href="">Download</a>
            </li>
          </ul>
        </div>
        <div id="column-2" className="footer-column">
          <h3 className="footer-header">Resources</h3>
          <ul>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Help Center</a>
            </li>
            <li>
              <a href="">Release Notes</a>
            </li>
            <li>
              <a href="">Status</a>
            </li>
          </ul>
        </div>
        <div id="column-3" className="footer-column">
          <h3 className="footer-header">Community</h3>
          <ul>
            <li>
              <a href="">Twitter</a>
            </li>
            <li>
              <a href="">LinkedIn</a>
            </li>
            <li>
              <a href="">Facebook</a>
            </li>
            <li>
              <a href="">Dribble</a>
            </li>
            <li>
              <a href="">Podcast</a>
            </li>
          </ul>
        </div>
        <div id="column-4" className="footer-column">
          <h3 className="footer-header">Company</h3>
          <ul>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Careers</a>
            </li>
            <li id="break">
              <a href="">Legal</a>
            </li>
          </ul>

          <strong>Contact Us</strong>
          <li>
            <a href="">info@abstract.com</a>
          </li>
        </div>
        <div id="column-5" className="footer-column-copyright">
          <img className="abstract-logo-footer" src={logo} alt="" />
          <p>© Copyright 2024</p>
          <p>Abstract Studio Design, Inc.</p>
          <p>All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
