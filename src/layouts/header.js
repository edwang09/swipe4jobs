import React from 'react';
import {
  Link
} from "react-router-dom";
function Header() {
  return (
    <header className="header">
        <div className="logo">
            <div className="title">
                <div className="swipe">SWIPE</div>
                <div className="four">4</div>
                <div className="jobs">JOBS</div>
            </div>
            <div className="subtitle">
                Reinventing the Career Wheel    
            </div>
        </div>

        <nav>
            <ul className="secondarynav">
                <li><Link to="/">FAQ</Link></li>
                <li><Link to="/">Terms of Use</Link></li>
                <li><Link to="/">Contact</Link></li>
            </ul>
            <ul className="mainnav">
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/about">ABOUT</Link></li>
                <li><Link to="/">SEARCH</Link></li>
                <li><Link to="/">POST</Link></li>
                <li><Link to="/">PRICING</Link></li>
            </ul>
        </nav>
    </header>
  );
}

export default Header;
