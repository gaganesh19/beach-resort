import React, { Component } from "react";
import Footerlogo from "../footer/footerlogo.png";
import Google from "../footer/google.png";
import Facebook from "../footer/facebook.png";
import Twitter from "../footer/twitter.png";
import Instagram from "../footer/instagram.png";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

import "./footer.css";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer>
        <div className="footer_container">
          <Link to="/">
            <img src={logo} alt="Beach Resort" />
          </Link>
          <div className="head1">
            <Link to="/">
              <a className="footer_head " href="#">
                Home
              </a>
            </Link>
            <Link to="/rooms">
              <a className="footer_head ">Rooms</a>
            </Link>
          </div>

          <div className="links">
            <img className="footer_link" alt="logo" src={Facebook} />
            <img className="footer_link" alt="logo" src={Google} />
            <img className="footer_link" alt="logo" src={Twitter} />
            <img className="footer_link" alt="logo" src={Instagram} />
          </div>
        </div>
        <div>
          <p className="copy_right">COPYRIGHT © 2020, MARINA BAY</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
