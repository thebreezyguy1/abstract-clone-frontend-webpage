import React from "react";

const Footer = () => {

    return(
        <div className="footer-container">
            <div id="column-1" className="footer-column">
                <h3>Abstract</h3>
                <ul>
                    <li><a href="">Start Trial</a></li>
                    <li><a href="">Pricing</a></li>
                    <li><a href="">Download</a></li>
                </ul>
            </div>
            <div id="column-2" className="footer-column">
                <h3>Resources</h3>
                <ul>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Help Center</a></li>
                    <li><a href="">Release Notes</a></li>
                    <li><a href="">Status</a></li>
                </ul>
            </div>
            <div id="column-3" className="footer-column">
                <h3>Community</h3>
                <ul>
                    <li><a href="">Twitter</a></li>
                    <li><a href="">LinkedIn</a></li>
                    <li><a href="">Facebook</a></li>
                    <li><a href="">Dribble</a></li>
                    <li><a href="">Podcast</a></li>
                </ul>
            </div>
            <div id="column-4" className="footer-column">
                <h3>Company</h3>
                <ul>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Careers</a></li>
                    <li><a href="">Legal</a></li>
                </ul>

                <h4>Contact Us</h4>
                <li><a href="">info@abstract.com</a></li>
                
            </div>
            <div id="column-5" className="footer-column">
                <img src="" alt="" />
                <p>© Copyright 2024</p>
                <p>Abstract Studio Design, Inc.</p>
                <p>All rights reserved</p>             
            </div>
        </div>
    );
}

export default Footer;